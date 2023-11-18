"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { status, data: session } = useSession();
  // console.log("SESSION.USER: ", session?.user);

  // or return null
  const contentJSX = () =>
    (status === "loading" && <p>Loading....</p>) ||
    (status === "unauthenticated" && (
      <Link href="/api/auth/signin">Login</Link>
    )) ||
    (status === "authenticated" && (
      <div>
        {session.user!.email}
        <Link className="ml-5" href="/api/auth/signout">
          Logout
        </Link>
      </div>
    ));

  // ui returned
  return (
    <div className="mb-7 flex gap-5 bg-slate-200 px-5 py-3">
      <Link href="/">nextApp</Link>
      <Link href="/users">Users</Link>
      {contentJSX()}
    </div>
  );
}

export default Navbar;
