import { sql } from "drizzle-orm";
import { Hono } from "hono";

import database from "@/infra/db/database";

const app = new Hono();

app.get("/", async (c) => {
  const updatedAt = new Date().toISOString();

  const db = database.createClient();

  const databaseVersion = (await db.execute(sql`SHOW server_version;`)).rows[0]
    .server_version;

  const databaseMaxConnections = (await db.execute(sql`SHOW max_connections;`))
    .rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnections = (
    await db.execute(
      sql`SELECT count(*)::int FROM pg_stat_activity WHERE datname = ${databaseName};`,
    )
  ).rows[0].count;

  db.$client.end();

  return c.json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: Number(databaseMaxConnections),
        opened_connections: databaseOpenedConnections,
      },
    },
  });
});

export default app;
