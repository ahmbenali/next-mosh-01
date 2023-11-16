"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

function usePosts(userId: number | undefined) {
  const fetchPosts = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: { userId },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    // used for intern caching
    queryKey: userId ? ["users", userId, "posts"] : ['Posts'],
    // /users/1/posts and /posts to fetch all posts
    queryFn: fetchPosts,
    staleTime: 10 * 1000, // 10 s
  });
}

export default usePosts;
