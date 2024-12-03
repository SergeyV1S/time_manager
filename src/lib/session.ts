"use server";

/* eslint-disable no-console */

/* eslint-disable @typescript-eslint/no-explicit-any */
import type { JWTPayload } from "jose";
import { SignJWT, jwtVerify } from "jose";

import { cookies } from "next/headers";

export interface ISessionPayload extends JWTPayload {
  uid: string;
  isAdmin: boolean;
  name: string;
  expiresAt: Date;
}

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET);

export const encrypt = async (payload: ISessionPayload) =>
  new SignJWT(payload).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("7d").sign(encodedKey);

export const decrypt = async (session: string | undefined = "") => {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"]
    });
    return payload;
  } catch (error: any) {
    console.log("Failed to verify session", error);
  }
};

export const createSession = async (uid: string, isAdmin: boolean, name: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ uid: uid, isAdmin: isAdmin, name: name, expiresAt: expiresAt });
  const cookieManager = await cookies();

  cookieManager.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/"
  });
};

export const updateSession = async () => {
  const session = (await cookies()).get("session")?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/"
  });
};

export const deleteSession = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("session");
};
