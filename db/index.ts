import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@libsql/client";
import { drizzle as drizzleLibSql } from "drizzle-orm/libsql";
import type { LibSQLDatabase } from "drizzle-orm/libsql";
import { drizzle as drizzlePostgres } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { databaseDriver } from "./schema";

function createDatabase(): LibSQLDatabase<typeof schema> {
  if (databaseDriver === "postgres") {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is required when DB_DRIVER=postgres.");
    }

    const client = postgres(process.env.DATABASE_URL);
    return drizzlePostgres(client, {
      schema,
    }) as unknown as LibSQLDatabase<typeof schema>;
  }

  let sqliteUrl =
    process.env.SQLITE_DATABASE_URL || "file:./data/hopefoundation.db";

  if (process.env.VERCEL && sqliteUrl.startsWith("file:")) {
    const temporaryDatabase = "/tmp/hopefoundation.db";
    if (!existsSync(temporaryDatabase)) {
      copyFileSync(
        join(process.cwd(), "data", "hopefoundation.db"),
        temporaryDatabase
      );
    }
    sqliteUrl = `file:${temporaryDatabase}`;
  }

  const client = createClient({
    url: sqliteUrl,
    authToken: process.env.SQLITE_AUTH_TOKEN,
  });
  return drizzleLibSql(client, { schema });
}

export const db = createDatabase();
