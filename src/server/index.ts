import { router } from "./trpc";
import { todo } from "./routers/todo";

export const appRouter = router({
  todo,
});

export type AppRouter = typeof appRouter;
