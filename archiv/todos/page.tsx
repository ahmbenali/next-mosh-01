"use client";

import useTodos from "../query/hooks/useTodos";

export default function TodosPage() {
  // const query = useQuery({
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return <div>{todos?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</div>;
}
