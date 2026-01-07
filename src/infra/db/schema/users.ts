import { sql } from "drizzle-orm";
import { pgTable } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", (t) => ({
  id: t.uuid().primaryKey().defaultRandom(),
  email: t.varchar({ length: 254 }).unique().notNull(),
  password: t.varchar({ length: 60 }).notNull(),
  created_at: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updated_at: t
    .timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => sql`(timezone('utc', now()))`),
}));
