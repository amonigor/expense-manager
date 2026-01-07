import { Hono } from "hono";
import { handle } from "hono/vercel";

import status from "@/app/api/_routes/status/route";

const app = new Hono().basePath("/api");

app.route("/status", status);

export const GET = handle(app);
