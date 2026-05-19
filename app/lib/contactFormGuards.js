const HONEYPOT_KEY = "companyWebsite";
const LOADED_AT_KEY = "_formLoadedAt";

const DEFAULT_MIN_MS = 3000;
const DEFAULT_MAX_MS = 60 * 60 * 1000;
const DEFAULT_RATE_MAX = 5;
const DEFAULT_RATE_WINDOW_MS = 15 * 60 * 1000;

const MAX_FIELD_LENGTH = {
  name: 120,
  email: 254,
  company: 200,
  role: 80,
  experience: 40,
  message: 5000,
};

const EMAIL_BODY_KEYS = ["name", "email", "company", "role", "experience", "message"];

const rateLimitStore = new Map();

function envInt(name, fallback) {
  const n = Number(process.env[name]);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export function getClientIp(request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

export function checkContactRateLimit(ip) {
  const max = envInt("CONTACT_FORM_RATE_LIMIT_MAX", DEFAULT_RATE_MAX);
  const windowMs = envInt("CONTACT_FORM_RATE_LIMIT_WINDOW_MS", DEFAULT_RATE_WINDOW_MS);
  const now = Date.now();
  const key = ip || "unknown";

  let entry = rateLimitStore.get(key);
  if (!entry || now >= entry.resetAt) {
    entry = { count: 0, resetAt: now + windowMs };
    rateLimitStore.set(key, entry);
  }

  entry.count += 1;

  if (rateLimitStore.size > 5000) {
    for (const [k, v] of rateLimitStore) {
      if (now >= v.resetAt) rateLimitStore.delete(k);
    }
  }

  if (entry.count > max) {
    return { limited: true };
  }
  return { limited: false };
}

export function validateContactAntiSpam(data) {
  const honeypot = data[HONEYPOT_KEY];
  if (typeof honeypot === "string" && honeypot.trim()) {
    return { blocked: true, silent: true, reason: "honeypot" };
  }

  const minMs = envInt("CONTACT_FORM_MIN_MS", DEFAULT_MIN_MS);
  const maxMs = envInt("CONTACT_FORM_MAX_MS", DEFAULT_MAX_MS);
  const loadedAt = Number(data[LOADED_AT_KEY]);
  const elapsed = Date.now() - loadedAt;

  if (!Number.isFinite(loadedAt) || elapsed < minMs || elapsed > maxMs) {
    return { blocked: true, silent: true, reason: "timing" };
  }

  for (const [key, maxLen] of Object.entries(MAX_FIELD_LENGTH)) {
    const value = data[key];
    if (value != null && String(value).length > maxLen) {
      return {
        blocked: true,
        silent: false,
        reason: "length",
        message: "One or more fields are too long.",
      };
    }
  }

  return { blocked: false };
}

export function pickContactEmailFields(data) {
  const out = {};
  for (const key of EMAIL_BODY_KEYS) {
    if (data[key] != null && data[key] !== "") {
      out[key] = data[key];
    }
  }
  return out;
}
