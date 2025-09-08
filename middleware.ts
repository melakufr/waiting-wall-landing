import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "./auth"

// Define protected routes and required permissions
const protectedRoutes = [
  {
    path: "/subscribers",
    requiredPermission: null, // Any authenticated user can access
  },
  // {
  //   path: "/dashboard/users",
  //   requiredPermission: "users:read",
  // },
]

export async function middleware(request: NextRequest) {

  const session = await auth()
  const path = request.nextUrl.pathname

  // Check if the path is protected
  const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route.path))

  if (isProtectedRoute) {
    // If not authenticated, redirect to login
    if (!session) {
      const url = new URL("/login", request.url)
      url.searchParams.set("callbackUrl", encodeURI(request.url))
      return NextResponse.redirect(url)
    }    
  }

  return NextResponse.next()
}

/* This excludes paths like:
/api/... (most of them)
/_next/...
/favicon.ico 
*/
export const config = {
  matcher: ["/dashboard/:path*", "/((?!_next|api|favicon.ico|login|register|maintenance).*)"],
}