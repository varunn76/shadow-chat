import { treaty } from "@elysiajs/eden";
import type { App } from "@/app/api/[[...slugs]]/route";

const URI =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://shadow-chat-jade.vercel.app";

export const client = treaty<App>(URI).api;
