export async function submitContactEmail(formData) {
  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    let body = {};
    try {
      body = await res.json();
    } catch {
      body = {};
    }

    if (!res.ok || !body.success) {
      return {
        ok: false,
        error: body.error || "Failed to send message. Please try again later.",
      };
    }

    return { ok: true };
  } catch {
    return {
      ok: false,
      error: "Could not reach the server. Check your connection and try again.",
    };
  }
}
