import { notFound } from "next/navigation";

interface Props {
  params: { id: string }; // params.id is always a string
}

function UserDetailPage({ params: { id } }: Props) {
  if (+id > 10) notFound(); // only for simulating

  return <div>Details Page of user: {id}</div>;
}

export default UserDetailPage;
