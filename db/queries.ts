import { count, desc, eq } from "drizzle-orm";
import { db } from "./index";
import {
  contactMessages,
  galleryImages,
  messageStatusEnum,
  programs,
  publicContent,
  programStatusEnum,
  projects,
  projectStatusEnum,
  stories,
  storyCategoryEnum,
  submissionStatusEnum,
  volunteerSubmissions,
} from "./schema";
import {
  defaultHomepageContent,
  type HomepageContent,
} from "@/lib/homepage-content";
import type {
  ContactMessage,
  GalleryImage,
  Program,
  Project,
  Story,
  VolunteerSubmission,
} from "./types";

export type {
  Story,
  Program,
  Project,
  ContactMessage,
  VolunteerSubmission,
  GalleryImage,
};

type StoryCategory = (typeof storyCategoryEnum.enumValues)[number];
type ProgramTag = (typeof programStatusEnum.enumValues)[number];
type ProjectStatus = (typeof projectStatusEnum.enumValues)[number];
type MessageStatus = (typeof messageStatusEnum.enumValues)[number];
type SubmissionStatus = (typeof submissionStatusEnum.enumValues)[number];

const iso = (date: Date) => date.toISOString();

function mapStory(row: typeof stories.$inferSelect): Story {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt ?? "",
    content: row.content,
    author: row.author,
    category: row.category,
    coverImageUrl: row.coverImageUrl ?? "",
    published: row.published,
    publishedAt: row.publishedAt ? iso(row.publishedAt) : null,
    createdAt: iso(row.createdAt),
    updatedAt: iso(row.updatedAt),
  };
}

function mapProgram(row: typeof programs.$inferSelect): Program {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    tag: row.tag,
    description: row.description,
    fullDescription: row.fullDescription,
    beneficiaries: row.beneficiaries ?? "",
    location: row.location ?? "",
    coverImageUrl: row.coverImageUrl ?? "",
    goals: row.goals ?? [],
    outcomes: row.outcomes ?? [],
    createdAt: iso(row.createdAt),
    updatedAt: iso(row.updatedAt),
  };
}

function mapProject(row: typeof projects.$inferSelect): Project {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    description: row.description,
    location: row.location ?? "",
    status: row.status,
    coverImageUrl: row.coverImageUrl ?? "",
    createdAt: iso(row.createdAt),
    updatedAt: iso(row.updatedAt),
  };
}

function mapContactMessage(
  row: typeof contactMessages.$inferSelect
): ContactMessage {
  return {
    id: row.id,
    fullName: row.fullName,
    email: row.email,
    subject: row.subject ?? "",
    message: row.message,
    status: row.status,
    createdAt: iso(row.createdAt),
  };
}

function mapVolunteerSubmission(
  row: typeof volunteerSubmissions.$inferSelect
): VolunteerSubmission {
  return {
    id: row.id,
    fullName: row.fullName,
    email: row.email,
    phone: row.phone ?? "",
    areaOfInterest: row.areaOfInterest ?? "",
    message: row.message ?? "",
    status: row.status,
    createdAt: iso(row.createdAt),
  };
}

function mapGalleryImage(row: typeof galleryImages.$inferSelect): GalleryImage {
  return {
    id: row.id,
    imageUrl: row.imageUrl,
    caption: row.caption ?? "",
    category: row.category ?? "",
    showInGallery: row.showInGallery,
    createdAt: iso(row.createdAt),
  };
}

export async function getStories(): Promise<Story[]> {
  const rows = await db
    .select()
    .from(stories)
    .orderBy(desc(stories.createdAt));
  return rows.map(mapStory);
}

export async function getStoryById(id: string): Promise<Story | null> {
  const [row] = await db.select().from(stories).where(eq(stories.id, id));
  return row ? mapStory(row) : null;
}

export async function createStory(
  data: Omit<Story, "id" | "createdAt" | "updatedAt">
): Promise<Story> {
  const [row] = await db
    .insert(stories)
    .values({
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      author: data.author,
      category: data.category as StoryCategory,
      coverImageUrl: data.coverImageUrl,
      published: data.published,
      publishedAt: data.publishedAt ? new Date(data.publishedAt) : null,
    })
    .returning();
  return mapStory(row);
}

export async function updateStory(
  id: string,
  data: Partial<Omit<Story, "id" | "createdAt" | "updatedAt">>
): Promise<Story | null> {
  const { publishedAt, category, ...rest } = data;
  const values: Partial<typeof stories.$inferInsert> = {
    ...rest,
    updatedAt: new Date(),
  };
  if (publishedAt !== undefined) {
    values.publishedAt = publishedAt ? new Date(publishedAt) : null;
  }
  if (category !== undefined) {
    values.category = category as StoryCategory;
  }
  const [row] = await db
    .update(stories)
    .set(values)
    .where(eq(stories.id, id))
    .returning();
  return row ? mapStory(row) : null;
}

export async function deleteStory(id: string): Promise<boolean> {
  const rows = await db
    .delete(stories)
    .where(eq(stories.id, id))
    .returning({ id: stories.id });
  return rows.length > 0;
}

export async function getPrograms(): Promise<Program[]> {
  const rows = await db
    .select()
    .from(programs)
    .orderBy(desc(programs.createdAt));
  return rows.map(mapProgram);
}

export async function getProgramById(id: string): Promise<Program | null> {
  const [row] = await db.select().from(programs).where(eq(programs.id, id));
  return row ? mapProgram(row) : null;
}

export async function getProgramBySlug(slug: string): Promise<Program | null> {
  const [row] = await db.select().from(programs).where(eq(programs.slug, slug));
  return row ? mapProgram(row) : null;
}

export async function createProgram(
  data: Omit<Program, "id" | "createdAt" | "updatedAt">
): Promise<Program> {
  const [row] = await db
    .insert(programs)
    .values({
      title: data.title,
      slug: data.slug,
      tag: data.tag as ProgramTag,
      description: data.description,
      fullDescription: data.fullDescription,
      beneficiaries: data.beneficiaries,
      location: data.location,
      coverImageUrl: data.coverImageUrl,
      goals: data.goals,
      outcomes: data.outcomes,
    })
    .returning();
  return mapProgram(row);
}

export async function updateProgram(
  id: string,
  data: Partial<Omit<Program, "id" | "createdAt" | "updatedAt">>
): Promise<Program | null> {
  const { tag, ...rest } = data;
  const values: Partial<typeof programs.$inferInsert> = {
    ...rest,
    updatedAt: new Date(),
  };
  if (tag !== undefined) {
    values.tag = tag as ProgramTag;
  }
  const [row] = await db
    .update(programs)
    .set(values)
    .where(eq(programs.id, id))
    .returning();
  return row ? mapProgram(row) : null;
}

export async function deleteProgram(id: string): Promise<boolean> {
  const rows = await db
    .delete(programs)
    .where(eq(programs.id, id))
    .returning({ id: programs.id });
  return rows.length > 0;
}

export async function getProjects(): Promise<Project[]> {
  const rows = await db
    .select()
    .from(projects)
    .orderBy(desc(projects.createdAt));
  return rows.map(mapProject);
}

export async function getProjectById(id: string): Promise<Project | null> {
  const [row] = await db.select().from(projects).where(eq(projects.id, id));
  return row ? mapProject(row) : null;
}

export async function createProject(
  data: Omit<Project, "id" | "createdAt" | "updatedAt">
): Promise<Project> {
  const [row] = await db
    .insert(projects)
    .values({
      title: data.title,
      slug: data.slug,
      description: data.description,
      location: data.location,
      status: data.status as ProjectStatus,
      coverImageUrl: data.coverImageUrl,
    })
    .returning();
  return mapProject(row);
}

export async function updateProject(
  id: string,
  data: Partial<Omit<Project, "id" | "createdAt" | "updatedAt">>
): Promise<Project | null> {
  const { status, ...rest } = data;
  const values: Partial<typeof projects.$inferInsert> = {
    ...rest,
    updatedAt: new Date(),
  };
  if (status !== undefined) {
    values.status = status as ProjectStatus;
  }
  const [row] = await db
    .update(projects)
    .set(values)
    .where(eq(projects.id, id))
    .returning();
  return row ? mapProject(row) : null;
}

export async function deleteProject(id: string): Promise<boolean> {
  const rows = await db
    .delete(projects)
    .where(eq(projects.id, id))
    .returning({ id: projects.id });
  return rows.length > 0;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const rows = await db
    .select()
    .from(contactMessages)
    .orderBy(desc(contactMessages.createdAt));
  return rows.map(mapContactMessage);
}

export async function getContactMessageById(
  id: string
): Promise<ContactMessage | null> {
  const [row] = await db
    .select()
    .from(contactMessages)
    .where(eq(contactMessages.id, id));
  return row ? mapContactMessage(row) : null;
}

export async function updateContactMessage(
  id: string,
  data: Partial<Pick<ContactMessage, "status">>
): Promise<ContactMessage | null> {
  if (data.status === undefined) {
    return getContactMessageById(id);
  }
  const [row] = await db
    .update(contactMessages)
    .set({ status: data.status as MessageStatus })
    .where(eq(contactMessages.id, id))
    .returning();
  return row ? mapContactMessage(row) : null;
}

export async function deleteContactMessage(id: string): Promise<boolean> {
  const rows = await db
    .delete(contactMessages)
    .where(eq(contactMessages.id, id))
    .returning({ id: contactMessages.id });
  return rows.length > 0;
}

export async function getVolunteerSubmissions(): Promise<
  VolunteerSubmission[]
> {
  const rows = await db
    .select()
    .from(volunteerSubmissions)
    .orderBy(desc(volunteerSubmissions.createdAt));
  return rows.map(mapVolunteerSubmission);
}

export async function getVolunteerSubmissionById(
  id: string
): Promise<VolunteerSubmission | null> {
  const [row] = await db
    .select()
    .from(volunteerSubmissions)
    .where(eq(volunteerSubmissions.id, id));
  return row ? mapVolunteerSubmission(row) : null;
}

export async function updateVolunteerSubmission(
  id: string,
  data: Partial<Pick<VolunteerSubmission, "status">>
): Promise<VolunteerSubmission | null> {
  if (data.status === undefined) {
    return getVolunteerSubmissionById(id);
  }
  const [row] = await db
    .update(volunteerSubmissions)
    .set({ status: data.status as SubmissionStatus })
    .where(eq(volunteerSubmissions.id, id))
    .returning();
  return row ? mapVolunteerSubmission(row) : null;
}

export async function deleteVolunteerSubmission(id: string): Promise<boolean> {
  const rows = await db
    .delete(volunteerSubmissions)
    .where(eq(volunteerSubmissions.id, id))
    .returning({ id: volunteerSubmissions.id });
  return rows.length > 0;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  const rows = await db
    .select()
    .from(galleryImages)
    .orderBy(desc(galleryImages.createdAt));
  return rows.map(mapGalleryImage);
}

export async function getPublicGalleryImages(): Promise<GalleryImage[]> {
  const rows = await db
    .select()
    .from(galleryImages)
    .where(eq(galleryImages.showInGallery, true))
    .orderBy(desc(galleryImages.createdAt));
  return rows.map(mapGalleryImage);
}

export async function getPublicGalleryImagesPage({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}): Promise<{ images: GalleryImage[]; hasMore: boolean }> {
  const safeLimit = Math.min(Math.max(limit, 1), 24);
  const safeOffset = Math.max(offset, 0);
  const rows = await db
    .select()
    .from(galleryImages)
    .where(eq(galleryImages.showInGallery, true))
    .orderBy(desc(galleryImages.createdAt))
    .limit(safeLimit + 1)
    .offset(safeOffset);

  return {
    images: rows.slice(0, safeLimit).map(mapGalleryImage),
    hasMore: rows.length > safeLimit,
  };
}

export async function createGalleryImage(
  data: Omit<GalleryImage, "id" | "createdAt">
): Promise<GalleryImage> {
  const [row] = await db.insert(galleryImages).values(data).returning();
  return mapGalleryImage(row);
}

export async function updateGalleryImageVisibility(
  id: string,
  showInGallery: boolean
): Promise<boolean> {
  const rows = await db
    .update(galleryImages)
    .set({ showInGallery })
    .where(eq(galleryImages.id, id))
    .returning({ id: galleryImages.id });
  return rows.length > 0;
}

export async function deleteGalleryImage(id: string): Promise<boolean> {
  const rows = await db
    .delete(galleryImages)
    .where(eq(galleryImages.id, id))
    .returning({ id: galleryImages.id });
  return rows.length > 0;
}

export async function getDashboardStats() {
  const [
    [storyCount],
    [programCount],
    [projectCount],
    [unreadCount],
    [pendingCount],
  ] = await Promise.all([
    db.select({ value: count() }).from(stories),
    db.select({ value: count() }).from(programs),
    db.select({ value: count() }).from(projects),
    db
      .select({ value: count() })
      .from(contactMessages)
      .where(eq(contactMessages.status, "unread")),
    db
      .select({ value: count() })
      .from(volunteerSubmissions)
      .where(eq(volunteerSubmissions.status, "pending")),
  ]);

  return {
    totalStories: storyCount.value,
    totalPrograms: programCount.value,
    totalProjects: projectCount.value,
    unreadMessages: unreadCount.value,
    pendingVolunteers: pendingCount.value,
  };
}

export async function getHomepageContent(): Promise<HomepageContent> {
  const [row] = await db
    .select({ content: publicContent.content })
    .from(publicContent)
    .where(eq(publicContent.key, "homepage"))
    .limit(1);

  const savedContent = row?.content as Partial<HomepageContent> | undefined;

  return {
    ...defaultHomepageContent,
    ...savedContent,
    hero: { ...defaultHomepageContent.hero, ...savedContent?.hero },
    impact: { ...defaultHomepageContent.impact, ...savedContent?.impact },
    quote: { ...defaultHomepageContent.quote, ...savedContent?.quote },
    opportunity: {
      ...defaultHomepageContent.opportunity,
      ...savedContent?.opportunity,
    },
    video: { ...defaultHomepageContent.video, ...savedContent?.video },
    message: { ...defaultHomepageContent.message, ...savedContent?.message },
    closing: { ...defaultHomepageContent.closing, ...savedContent?.closing },
    partnerLogos:
      savedContent?.partnerLogos ?? defaultHomepageContent.partnerLogos,
  };
}

export async function updateHomepageContent(content: HomepageContent) {
  await db
    .insert(publicContent)
    .values({ key: "homepage", content })
    .onConflictDoUpdate({
      target: publicContent.key,
      set: { content, updatedAt: new Date() },
    });
}
