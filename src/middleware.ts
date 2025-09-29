import { NextRequest, NextResponse } from "next/server"

// its for authenticated route
// export function middleware(request: NextRequest) {
//     return NextResponse.redirect(new URL('/', request.url))
//   }

// export const config = {
//     matcher: '/about',
//   }

  // check is there any user by nextauth middleware.
  
  export { default } from "next-auth/middleware"

  export const config = { matcher: ["/dashboard"] }
