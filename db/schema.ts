import * as postgresSchema from "./schema.postgres";
import * as sqliteSchema from "./schema.sqlite";

export type DatabaseDriver = "sqlite" | "postgres";

export const databaseDriver: DatabaseDriver =
  process.env.DB_DRIVER === "postgres" ? "postgres" : "sqlite";

const activeSchema = (
  databaseDriver === "postgres" ? postgresSchema : sqliteSchema
) as typeof sqliteSchema;

export const {
  adminSessions,
  adminUsers,
  contactMessages,
  galleryImages,
  messageStatusEnum,
  newsletterSubscriptions,
  programs,
  programStatusEnum,
  projects,
  projectStatusEnum,
  publicContent,
  stories,
  storyCategoryEnum,
  submissionStatusEnum,
  volunteerSubmissions,
} = activeSchema;
