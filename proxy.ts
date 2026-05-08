import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const PROTECTED_PREFIXES = ["/", "/editor", "/audience"];
const AUTH_PAGES = ["/sign-in", "/sign-up"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = getSessionCookie(request);

  if (AUTH_PAGES.includes(pathname) && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const isProtected = PROTECTED_PREFIXES.some((prefix) =>
    prefix === "/" ? pathname === "/" : pathname.startsWith(prefix),
  );

  if (isProtected && !sessionToken) {
    const url = new URL("/sign-in", request.url);
    if (pathname !== "/") url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/editor/:path*",
    "/audience/:path*",
    "/sign-in",
    "/sign-up",
  ],
};
