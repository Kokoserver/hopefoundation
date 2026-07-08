import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });
config();

const databaseDriver =
  process.env.DB_DRIVER === "postgres" ? "postgres" : "sqlite";

if (databaseDriver === "postgres") {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is required when DB_DRIVER=postgres.");
  }
}

const drizzleConfig =
  databaseDriver === "postgres"
    ? defineConfig({
        out: "./drizzle",
        schema: "./db/schema.postgres.ts",
        dialect: "postgresql",
        dbCredentials: {
          url: process.env.DATABASE_URL!,
        },
      })
    : defineConfig({
        out: "./drizzle/sqlite",
        schema: "./db/schema.sqlite.ts",
        dialect: "sqlite",
        dbCredentials: {
          url:
            process.env.SQLITE_DATABASE_URL ||
            "file:./data/hopefoundation.db",
        },
      });

export default drizzleConfig;
