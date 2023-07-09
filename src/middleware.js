import { NextResponse } from "next/server";

/**
 * function name should be middleware
 * any other name would also work
 * but in that case, its export has to be default
 */
export function middleware(request) {
    console.log("-----------------------------------");
    console.log("Request Url");
    console.log(request.url);
    console.log("");
    console.log("Request NextUrl");
    console.log(request.nextUrl);
    if(request.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*"
    ]
}