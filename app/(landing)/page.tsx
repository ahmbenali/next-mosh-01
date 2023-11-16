import Link from "next/link";

function Home() {
  return (
    <div className="flex flex-col gap-5 ">
      Welcome to my app!
      <Link href="/users">Users</Link>
    </div>
  );
}

export default Home;
