import { redis } from "@/lib/redis";
import { Elysia, t } from "elysia";
import { nanoid } from "nanoid";

const ROOM_TTL_SECONDS = 60 * 10;
const room = new Elysia({ prefix: "/room" }).post("/create", async () => {
  const roomiId = nanoid();
  await redis.hset(`meta:${roomiId}`, {
    connected: [],
    createdAt: Date.now(),
  });

  await redis.expire(`meta:${roomiId}`, ROOM_TTL_SECONDS);

  return { roomiId };
});
const app = new Elysia({ prefix: "/api" }).use(room);

export const GET = app.fetch;
export const POST = app.fetch;

export type App = typeof app;
