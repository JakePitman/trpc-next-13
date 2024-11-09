import { publicProcedure, router } from "../trpc";
import { z } from "zod";

const TODOS = ["TODO 1", "TODO 2", "TODO 3"];

export const todo = router({
  getTodos: publicProcedure.query(async () => {
    return TODOS;
  }),
  addTodo: publicProcedure
    .input(z.object({ title: z.string() }))
    .mutation(async (opts) => {
      TODOS.push(opts.input.title);
      return TODOS;
    }),
});
