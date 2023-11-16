"use client";

import { useState } from "react";
import usePosts from "../query/usePosts";

export default function PostsPage() {
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading } = usePosts(userId);

  if (error) return <p>{error.message}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="space-y-5 p-5">
      {/* userId is a number but value is a string -> it must be parsed */}
      <select onChange={(ev) => setUserId(+ev.target.value)}>
        <option value="">All Posts</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="space-y-5">
        {data?.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
}
