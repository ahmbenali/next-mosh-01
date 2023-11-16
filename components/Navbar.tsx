import Link from "next/link";

function Navbar() {
  return (
    <div className="mb-7 flex gap-5 bg-slate-200 px-5 py-3">
      <Link href="/">nextApp</Link>
      <Link href="/users">Users</Link>
    </div>
  );
}

export default Navbar;
