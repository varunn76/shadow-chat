import { InferRealtimeEvents, Realtime } from "@upstash/realtime";
import { redis } from "@/lib/redis";
import z from "zod";

const message = z.object({
  id: z.string(),
  sender: z.string(),
  text: z.string(),
  timestamp: z.string(),
  roomId: z.string(),
  token: z.string().optional(),
});
const schema = {
  chat: {
    message,
    destroyed: z.object({
      isDestroyed: z.literal(true),
    }),
  },
};

export const realtime = new Realtime({ schema, redis });

export type RealtimeEvents = InferRealtimeEvents<typeof realtime>;

export type Message = z.infer<typeof message>;
