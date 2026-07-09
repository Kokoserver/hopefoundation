import { randomUUID } from "node:crypto";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import type { HomepageContent } from "@/lib/homepage-content";

export const projectStatusEnum = {
  enumValues: ["planned", "ongoing", "completed"] as const,
};

export const submissionStatusEnum = {
  enumValues: ["pending", "reviewed", "contacted"] as const,
};

export const messageStatusEnum = {
  enumValues: ["unread", "read", "responded"] as const,
};

export const programStatusEnum = {
  enumValues: ["ongoing", "upcoming", "planned"] as const,
};

export const storyCategoryEnum = {
  enumValues: [
    "Beneficiary journeys",
    "Volunteer reflections",
    "Partner perspectives",
    "Community wins",
  ] as const,
};

const id = () =>
  text("id")
    .primaryKey()
    .$defaultFn(() => randomUUID());

const createdAt = () =>
  integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date());

const updatedAt = () =>
  integer("updated_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date());

export const publicContent = sqliteTable("public_content", {
  id: id(),
  key: text("key").notNull().unique(),
  content: text("content", { mode: "json" }).$type<HomepageContent>().notNull(),
  updatedAt: updatedAt(),
});

export const projects = sqliteTable("projects", {
  id: id(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  location: text("location"),
  status: text("status", { enum: projectStatusEnum.enumValues })
    .notNull()
    .default("planned"),
  coverImageUrl: text("cover_image_url"),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const galleryImages = sqliteTable("gallery_images", {
  id: id(),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  category: text("category"),
  showInGallery: integer("show_in_gallery", { mode: "boolean" })
    .notNull()
    .default(true),
  createdAt: createdAt(),
});

export const volunteerSubmissions = sqliteTable("volunteer_submissions", {
  id: id(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  areaOfInterest: text("area_of_interest"),
  message: text("message"),
  status: text("status", { enum: submissionStatusEnum.enumValues })
    .notNull()
    .default("pending"),
  createdAt: createdAt(),
});

export const contactMessages = sqliteTable("contact_messages", {
  id: id(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  status: text("status", { enum: messageStatusEnum.enumValues })
    .notNull()
    .default("unread"),
  createdAt: createdAt(),
});

export const newsletterSubscriptions = sqliteTable("newsletter_subscriptions", {
  id: id(),
  email: text("email").notNull().unique(),
  createdAt: createdAt(),
});

export const programs = sqliteTable("programs", {
  id: id(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  tag: text("tag", { enum: programStatusEnum.enumValues })
    .notNull()
    .default("planned"),
  description: text("description").notNull(),
  fullDescription: text("full_description").notNull(),
  beneficiaries: text("beneficiaries"),
  location: text("location"),
  coverImageUrl: text("cover_image_url"),
  goals: text("goals", { mode: "json" }).$type<string[]>(),
  outcomes: text("outcomes", { mode: "json" }).$type<string[]>(),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const stories = sqliteTable("stories", {
  id: id(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  author: text("author").notNull(),
  category: text("category", { enum: storyCategoryEnum.enumValues })
    .notNull()
    .default("Community wins"),
  coverImageUrl: text("cover_image_url"),
  published: integer("published", { mode: "boolean" })
    .notNull()
    .default(false),
  publishedAt: integer("published_at", { mode: "timestamp" }),
  createdAt: createdAt(),
  updatedAt: updatedAt(),
});

export const adminUsers = sqliteTable("admin_users", {
  id: id(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  isDefault: integer("is_default", { mode: "boolean" })
    .notNull()
    .default(false),
  createdAt: createdAt(),
});

export const adminSessions = sqliteTable("admin_sessions", {
  id: id(),
  adminId: text("admin_id")
    .notNull()
    .references(() => adminUsers.id, { onDelete: "cascade" }),
  tokenHash: text("token_hash").notNull().unique(),
  expiresAt: integer("expires_at", { mode: "timestamp" }).notNull(),
  createdAt: createdAt(),
});
