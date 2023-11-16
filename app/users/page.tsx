import Link from "next/link";
import { Suspense } from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string; by: "asc" | "desc" };
}

async function UsersPage({ searchParams: { sortOrder, by } }: Props) {
  // console.log("searchParams: ", sortOrder, by+'ending');

  // fetch users from api
  /*  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  ); */
  // console.log('RES: ',res);

  // const users = (await res.data) as User[];

  return (
    <div className="flex flex-col gap-5">
      <h1>Users</h1>
      {/* date only to show static and dynamic rendering */}
      {/* <p>{new Date().toLocaleTimeString()}</p>
       */}
      <Link href="/users/new" className="btn btn-ghost w-fit">
        New User
      </Link>
      {/* white data fetching, show fallback content */}
      <Suspense fallback={<p>Loading....</p>}>
        <UserTable sortOrder={sortOrder} by={by} />
      </Suspense>
      <Link className="btn btn-ghost w-fit" href="/">
        Back To Home
      </Link>
    </div>
  );
}

export default UsersPage;
