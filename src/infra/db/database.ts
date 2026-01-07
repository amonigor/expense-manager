import { drizzle } from "drizzle-orm/node-postgres";

function createClient() {
  return drizzle({
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production",
    },
  });
}

const database = {
  createClient,
};

export default database;
