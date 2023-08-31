import { EventEmitter } from "events";
import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { z } from "zod";

import { PORT } from "./env.js";

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  return {
    req,
    res,
  };
};
type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const router = t.router;
const publicProcedure = t.procedure;

let id = 0;

const appRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `Hello, ${input ? input + "!" : "World!"}`;
  }),
});

export type AppRouter = typeof appRouter;

async function main() {
  const app = express();

  app.use((req, _res, next) => {
    console.log("⬅️ ", req.method, req.path, req.body ?? req.query);
    next();
  });

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    }),
  );
  app.get("/", (_req, res) => res.send("Hello, World!"));
  app.listen(PORT, () => console.log("Server Running on Port " + PORT));
}

void main();
