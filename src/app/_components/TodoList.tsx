"use client";

import { trpc } from "../_trpc/client";

export default function TodoList() {
  const getTodos = trpc.todo.getTodos.useQuery();
  const addTodo = trpc.todo.addTodo.useMutation().mutate;

  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
      <button
        onClick={() => {
          addTodo({ title: "New TODO" });
        }}
      >
        Add TODO
      </button>
    </div>
  );
}
