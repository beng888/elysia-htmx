import type { Config } from "drizzle-kit";

export const dbCredentials = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB ?? "",
  host: process.env.POSTGRES_HOST ?? "",
};

export default {
  schema: "./src/db/schema/*",
  out: "drizzle",
  driver: "pg",
  dbCredentials,
  strict: true,
} satisfies Config;
