import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== "true") return NextResponse.next();

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/em-construcao";
  maintenanceUrl.search = "";

  const response = NextResponse.rewrite(maintenanceUrl, { status: 503 });
  response.headers.set("Cache-Control", "no-store, max-age=0");
  response.headers.set("Retry-After", "3600");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|em-construcao|.*\\..*).*)",
  ],
};
