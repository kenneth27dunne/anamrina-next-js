import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function login() {
  // Save the session in a cookie
  cookies().set("isAuthorised", true, { expires, httpOnly: true });
}

export async function logout() {
  // Destroy the session
  cookies().set("isAuthorised", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("isAuthorised")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request) {
  const session = request.cookies.get("isAuthorised")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set("session", await encrypt(parsed), {
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
