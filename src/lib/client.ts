import { treaty } from "@elysiajs/eden";
import type { App } from "@/app/api/[[...slugs]]/route";

const URI =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_URL!
    : process.env.LIVE_URL!;

export const client = treaty<App>(URI).api;
