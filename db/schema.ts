import {
  pgTable,
  pgEnum,
  uuid,
  text,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

// NOTE: Admin / Auth schema is intentionally DEFERRED
// This will be added when the admin dashboard is built. Do not add users/sessions tables yet.

export const projectStatusEnum = pgEnum("project_status", [
  "planned",
  "ongoing",
  "completed",
]);

export const submissionStatusEnum = pgEnum("submission_status", [
  "pending",
  "reviewed",
  "contacted",
]);

export const messageStatusEnum = pgEnum("message_status", [
  "unread",
  "read",
  "responded",
]);

export const blogPosts = pgTable("blog_posts", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  coverImageUrl: text("cover_image_url"),
  published: boolean("published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const projects = pgTable("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  location: text("location"),
  status: projectStatusEnum("status").notNull().default("planned"),
  coverImageUrl: text("cover_image_url"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const galleryImages = pgTable("gallery_images", {
  id: uuid("id").defaultRandom().primaryKey(),
  imageUrl: text("image_url").notNull(),
  caption: text("caption"),
  category: text("category"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const volunteerSubmissions = pgTable("volunteer_submissions", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  areaOfInterest: text("area_of_interest"),
  message: text("message"),
  status: submissionStatusEnum("status").notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject"),
  message: text("message").notNull(),
  status: messageStatusEnum("status").notNull().default("unread"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const programStatusEnum = pgEnum("program_status", [
  "ongoing",
  "upcoming",
  "planned",
]);

export const storyCategoryEnum = pgEnum("story_category", [
  "Beneficiary journeys",
  "Volunteer reflections",
  "Partner perspectives",
  "Community wins",
]);

export const programs = pgTable("programs", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  tag: programStatusEnum("tag").notNull().default("planned"),
  description: text("description").notNull(),
  fullDescription: text("full_description").notNull(),
  beneficiaries: text("beneficiaries"),
  location: text("location"),
  coverImageUrl: text("cover_image_url"),
  goals: text("goals").array(),
  outcomes: text("outcomes").array(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const stories = pgTable("stories", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt"),
  content: text("content").notNull(),
  author: text("author").notNull(),
  category: storyCategoryEnum("category").notNull().default("Community wins"),
  coverImageUrl: text("cover_image_url"),
  published: boolean("published").notNull().default(false),
  publishedAt: timestamp("published_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});
