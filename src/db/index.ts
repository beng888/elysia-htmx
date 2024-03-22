import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { dbCredentials } from "../../drizzle.config";

export const connection = postgres(dbCredentials);

export const db = drizzle(connection);
