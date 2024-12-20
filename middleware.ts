import { ERR_JWS_INVALID } from "@/lib/constants";
import { paths } from "@/lib/constants";
import type { ISessionPayload } from "@/lib/session";
import { decrypt, updateSession } from "@/lib/session";

import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const referer = req.headers.get("referer") || "/";

  const cookie = (await cookies()).get("session")?.value;
  const session: typeof ERR_JWS_INVALID | ISessionPayload = await decrypt(cookie);

  if (typeof session !== "string" && session?.expiresAt) {
    const currentTime = new Date(Date.now());
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
    const expiresAt = new Date(session.expiresAt);

    // @ts-ignore
    const timeRemaining = expiresAt.getTime() - currentTime.getTime();

    if (timeRemaining < ONE_DAY_IN_MS) {
      await updateSession();
    }
  }

  if (path !== paths.AUTH && session === ERR_JWS_INVALID) {
    return NextResponse.redirect(new URL(paths.AUTH, req.url));
  }

  if (path === paths.AUTH && session && typeof session !== "string") {
    return NextResponse.redirect(new URL(referer, req.url));
  }

  if (path.startsWith(paths.ADMIN) && typeof session !== "string" && !session?.isAdmin) {
    return NextResponse.redirect(new URL(referer, req.url));
  }

  if (path === paths.AUTH && typeof session !== "string" && session?.uid) {
    if (new URL(referer, req.url).pathname === paths.AUTH) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.redirect(new URL(referer, req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/((?!api/auth/register|api/auth/sign-in|_next/|static/|favicon.ico|manifest.json|robots.txt|apple-touch-icon.png|web-app-manifest-192x192.png|web-app-manifest-512x512.png|sw.js).*)"
  ]
};

export default middleware;
