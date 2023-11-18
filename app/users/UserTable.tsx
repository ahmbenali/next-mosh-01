import { sort } from "fast-sort";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
  by: "asc" | "desc";
}

async function UserTable({ sortOrder, by }: Props) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 5 }, // 5 seconds
    // cache: "no-store",
    // cache: "force-cache", default behavior of nextjs
  });

  const users = (await res.json()) as User[];

  const sortedUsers =
    by === "asc"
      ? sort(users).asc(
          sortOrder === "email" ? (user) => user.email : (user) => user.name,
        )
      : sort(users).desc(
          sortOrder === "email" ? (user) => user.email : (user) => user.name,
        );

  //t *** UI RETURNED ***
  return (
    <table className="table-bordered table">
      <thead>
        <tr>
          <th>
            <Link href="/users?sortOrder=name&by=asc">↑</Link>
            <span className="mx-2 text-2xl font-bold">Name</span>
            <Link href="/users?sortOrder=name&by=desc">↓ </Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email&by=asc">↑</Link>
            <span className="mx-2 text-2xl font-bold">Email</span>
            <Link href="/users?sortOrder=email&by=desc">↓ </Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map(({ id, name, email }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
