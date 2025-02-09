import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import {routes} from "@/app/resources";

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    if (pathname in routes && !routes[pathname as keyof typeof routes]) {
        return NextResponse.rewrite(new URL("/not-found", req.url));
    }

    const basePathname = pathname.substring(0, pathname.indexOf("/", 1));
    if (basePathname in routes && !routes[basePathname as keyof typeof routes]) {
        return NextResponse.rewrite(new URL("/not-found", req.url));
    }
    return NextResponse.next();

}

export const config = {
    matcher: [
        "/about",
        "/work/:path*",
        "/blog/:path*",
        "/gallery"
    ],
}