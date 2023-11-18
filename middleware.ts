/* export async function middleware(req: NextRequest) {
  //  every request will be redirected to /new-page
  return NextResponse.redirect(new URL("/new-page", req.url));
} */

/* import middleware from "next-auth/middleware";
export default middleware; */
export { default } from "next-auth/middleware";

// we can configure which paths should redirected
export const config = {
  /* *: zero or more */
  /* +: one or more */
  /* ?: zero or one */
  // matcher: ["/users/:id*"],
  // secure all the routes starting with /dashboard
  matcher: ["/dashboard/:path*"], // start every path in [] with /
};
