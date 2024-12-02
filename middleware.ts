import { paths } from "@/lib/constants";
import { decrypt } from "@/lib/session";

import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  const path = req.nextUrl.pathname;
  const referer = req.headers.get("referer") || "/";

  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  if (path !== paths.AUTH && !session) {
    return NextResponse.redirect(new URL(paths.AUTH, req.nextUrl));
  }

  if (path.startsWith(paths.ADMIN) && !session?.isAdmin) {
    return NextResponse.rewrite(new URL(referer, req.url));
  }

  if (path === paths.AUTH && session?.uid) {
    if (new URL(referer, req.url).pathname === paths.AUTH) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return NextResponse.redirect(new URL(referer, req.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api/auth/register|api/auth/sign-in|_next/|static/).*)"]
};

export default middleware;
