"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

function useTodos() {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    // used for intern caching
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000 // 10 s
  });
}

export default useTodos;
