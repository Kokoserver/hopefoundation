import type {
  Story,
  Program,
  Project,
  ContactMessage,
  VolunteerSubmission,
  GalleryImage,
} from "./types";

export type {
  Story,
  Program,
  Project,
  ContactMessage,
  VolunteerSubmission,
  GalleryImage,
};

const mockStories: Story[] = [
  {
    id: "s1", title: "From hardship to hope: Chioma's story", slug: "from-hardship-to-hope-chiomas-story",
    excerpt: "After losing her job, Chioma enrolled in our Women Rise Initiative and learned tailoring. Today she runs her own business and employs two other women in her community.",
    content: "When Chioma lost her job at a local supermarket in Enugu, she thought her world had ended...",
    author: "Achebe Hope Foundation", category: "Beneficiary journeys",
    coverImageUrl: "/images/918104b48623a6d997a17a9a8a03567739e23fbf.jpg",
    published: true, publishedAt: "2026-06-12T00:00:00Z", createdAt: "2026-06-12T00:00:00Z", updatedAt: "2026-06-12T00:00:00Z",
  },
  {
    id: "s2", title: "Why I volunteer: a teacher's perspective", slug: "why-i-volunteer-a-teachers-perspective",
    excerpt: "Mr. Emeka has been volunteering with our Education Initiative for three years. He shares what keeps him coming back.",
    content: "Mr. Emeka Okafor has been a primary school teacher in Enugu for over a decade...",
    author: "Emeka Okafor", category: "Volunteer reflections",
    coverImageUrl: "/images/ebde0f20909875bfb504427887ada502c3c38648.jpg",
    published: true, publishedAt: "2026-05-28T00:00:00Z", createdAt: "2026-05-28T00:00:00Z", updatedAt: "2026-05-28T00:00:00Z",
  },
  {
    id: "s3", title: "Building healthier communities together", slug: "building-healthier-communities-together",
    excerpt: "Our partnership with Enugu State Primary Healthcare Agency has brought free medical screenings to over 500 residents.",
    content: "Access to basic healthcare remains a challenge for many rural communities...",
    author: "Achebe Hope Foundation", category: "Partner perspectives",
    coverImageUrl: "/images/c49f4fcac50c2b6acba8314d8377904627f83cac.jpg",
    published: true, publishedAt: "2026-05-15T00:00:00Z", createdAt: "2026-05-15T00:00:00Z", updatedAt: "2026-05-15T00:00:00Z",
  },
  {
    id: "s4", title: "Bringing the classroom to the village", slug: "bringing-the-classroom-to-the-village",
    excerpt: "When the community of Ameke requested a learning centre, we responded.",
    content: "The community of Ameke, a rural settlement outside Enugu, had a problem...",
    author: "Achebe Hope Foundation", category: "Community wins",
    coverImageUrl: "/images/94e1204421b9dc987ed980d38d79ae0374fc1c72.jpg",
    published: true, publishedAt: "2026-05-02T00:00:00Z", createdAt: "2026-05-02T00:00:00Z", updatedAt: "2026-05-02T00:00:00Z",
  },
  {
    id: "s5", title: "Grace's journey back to school", slug: "graces-journey-back-to-school",
    excerpt: "At 14, Grace dropped out due to family hardship. Through our scholarship programme, she returned to class.",
    content: "When Grace lost her father, her family's finances collapsed...",
    author: "Grace Adeyemi", category: "Beneficiary journeys",
    coverImageUrl: "/images/b146d95d118b6f0b23c31c4d91959f1e86ca36fc.jpg",
    published: true, publishedAt: "2026-04-18T00:00:00Z", createdAt: "2026-04-18T00:00:00Z", updatedAt: "2026-04-18T00:00:00Z",
  },
  {
    id: "s6", title: "Behind every meal is a dedicated volunteer", slug: "behind-every-meal-is-a-dedicated-volunteer",
    excerpt: "Our volunteer kitchen team serves over 300 meals during every outreach.",
    content: "At 5 AM on outreach days, while most of the city is still asleep...",
    author: "Ngozi Eze", category: "Volunteer reflections",
    coverImageUrl: "/images/a3ecc4c3dc7dd5d41521f02dad48e05a77067ce5.jpg",
    published: true, publishedAt: "2026-03-22T00:00:00Z", createdAt: "2026-03-22T00:00:00Z", updatedAt: "2026-03-22T00:00:00Z",
  },
  {
    id: "s7", title: "A community rallies around its widows", slug: "a-community-rallies-around-its-widows",
    excerpt: "When we visited Umuida community, we met 40 widows supporting each other through a cooperative.",
    content: "During a routine community visit to Umuida, our team met a remarkable group...",
    author: "Achebe Hope Foundation", category: "Community wins",
    coverImageUrl: "/images/message-children-generated.png",
    published: true, publishedAt: "2026-03-10T00:00:00Z", createdAt: "2026-03-10T00:00:00Z", updatedAt: "2026-03-10T00:00:00Z",
  },
  {
    id: "s8", title: "Partnership spotlight: supporting orphanages", slug: "partnership-spotlight-supporting-orphanages",
    excerpt: "The matron of Little Stars Orphanage shares how regular welfare visits have changed lives.",
    content: "Little Stars Orphanage in Enugu South cares for 35 children...",
    author: "Achebe Hope Foundation", category: "Partner perspectives",
    coverImageUrl: "/images/a71acae314d01270a85bf4733d98aa5afb33aff4.jpg",
    published: true, publishedAt: "2026-04-05T00:00:00Z", createdAt: "2026-04-05T00:00:00Z", updatedAt: "2026-04-05T00:00:00Z",
  },
  {
    id: "s9", title: "Education against the odds", slug: "education-against-the-odds",
    excerpt: "Despite losing both parents, 16-year-old Samuel scored top marks in his exams.",
    content: "Samuel Okonkwo was 14 when he lost both parents within a year...",
    author: "Samuel Okonkwo", category: "Beneficiary journeys",
    coverImageUrl: "/images/07d4e4d51d8482bb57eaa668e61381bad9aadb64.jpg",
    published: true, publishedAt: "2026-02-28T00:00:00Z", createdAt: "2026-02-28T00:00:00Z", updatedAt: "2026-02-28T00:00:00Z",
  },
];

const mockPrograms: Program[] = [
  {
    id: "p1", title: "Back to School Drive", slug: "back-to-school-drive", tag: "ongoing",
    description: "Distributing school uniforms, bags, books, and stationery to 200+ children from low-income families across Enugu ahead of the new term.",
    fullDescription: "The Back to School Drive is one of our flagship annual programmes...",
    beneficiaries: "200 children", location: "Enugu East",
    coverImageUrl: "/images/ebde0f20909875bfb504427887ada502c3c38648.jpg",
    goals: ["Ensure no child misses school due to lack of supplies", "Boost confidence and readiness for the academic term", "Reduce dropout rates in underserved communities"],
    outcomes: ["200+ children equipped with full school kits", "95% of beneficiaries remained enrolled for the full term"],
    createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "p2", title: "Women Skills Bootcamp", slug: "women-skills-bootcamp", tag: "upcoming",
    description: "A 6-week vocational training programme in tailoring, bead-making, and pastry production for 50 women.",
    fullDescription: "The Women Skills Bootcamp is an intensive 6-week vocational training programme...",
    beneficiaries: "50 women", location: "Enugu North",
    coverImageUrl: "/images/918104b48623a6d997a17a9a8a03567739e23fbf.jpg",
    goals: ["Equip women with marketable vocational skills", "Provide startup resources for immediate income generation"],
    outcomes: ["50 women trained across three vocational tracks", "85% of graduates start generating income within 3 months"],
    createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "p3", title: "Orphanage Welfare Visit", slug: "orphanage-welfare-visit", tag: "ongoing",
    description: "Monthly visits to partner orphanages providing food supplies, hygiene products, and educational materials.",
    fullDescription: "Our Orphanage Welfare Visit programme ensures that children in partner orphanages receive consistent support...",
    beneficiaries: "120 children", location: "Enugu South",
    coverImageUrl: "/images/b146d95d118b6f0b23c31c4d91959f1e86ca36fc.jpg",
    goals: ["Provide consistent material support to partner orphanages", "Improve educational outcomes through tutoring"],
    outcomes: ["Monthly visits to 6 partner orphanages", "120+ children receiving regular support"],
    createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "p4", title: "Scholarship Programme", slug: "scholarship-programme", tag: "ongoing",
    description: "Sponsoring 30 bright students from underserved communities through secondary school.",
    fullDescription: "Our Scholarship Programme identifies academically promising students from underserved communities...",
    beneficiaries: "30 students", location: "Enugu State",
    coverImageUrl: "/images/94e1204421b9dc987ed980d38d79ae0374fc1c72.jpg",
    goals: ["Remove financial barriers to secondary education", "Support academically promising students"],
    outcomes: ["30 active scholars supported through secondary school", "92% scholar retention rate"],
    createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "p5", title: "Health Awareness Campaign", slug: "health-awareness-campaign", tag: "upcoming",
    description: "A community health drive offering free malaria screenings, blood pressure checks, and hygiene education.",
    fullDescription: "The Health Awareness Campaign brings essential preventive healthcare services to rural communities...",
    beneficiaries: "500+ residents", location: "Nsukka",
    coverImageUrl: "/images/c49f4fcac50c2b6acba8314d8377904627f83cac.jpg",
    goals: ["Increase access to basic health screenings in rural areas", "Raise awareness about preventive healthcare"],
    outcomes: ["500+ residents screened for common health conditions", "300+ mosquito nets distributed"],
    createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z",
  },
  {
    id: "p6", title: "Youth Mentorship Day", slug: "youth-mentorship-day", tag: "planned",
    description: "A one-day career guidance and life skills event connecting 100 young people with professionals.",
    fullDescription: "Youth Mentorship Day is a flagship event that brings together young people with professionals...",
    beneficiaries: "100 youths", location: "Enugu Urban",
    coverImageUrl: "/images/a71acae314d01270a85bf4733d98aa5afb33aff4.jpg",
    goals: ["Connect young people with positive role models", "Provide practical career guidance"],
    outcomes: ["100 young people attended the event", "15 professionals volunteered as mentors"],
    createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z",
  },
];

const mockProjects: Project[] = [
  { id: "pr1", title: "Ameke Learning Centre", slug: "ameke-learning-centre", description: "Construction of a two-classroom learning centre serving 80 children in Ameke community.", location: "Ameke, Enugu", status: "completed", coverImageUrl: "", createdAt: "2026-01-01T00:00:00Z", updatedAt: "2026-01-01T00:00:00Z" },
  { id: "pr2", title: "Community Borehole Project", slug: "community-borehole-project", description: "Installation of solar-powered boreholes providing clean water to 3 rural communities.", location: "Enugu South", status: "ongoing", coverImageUrl: "", createdAt: "2026-02-01T00:00:00Z", updatedAt: "2026-02-01T00:00:00Z" },
  { id: "pr3", title: "Women's Skills Centre", slug: "womens-skills-centre", description: "Establishment of a vocational training centre for women in Enugu North.", location: "Enugu North", status: "planned", coverImageUrl: "", createdAt: "2026-03-01T00:00:00Z", updatedAt: "2026-03-01T00:00:00Z" },
  { id: "pr4", title: "School Supplies Drive 2026", slug: "school-supplies-drive-2026", description: "Annual distribution of school supplies to 500+ children across 10 communities.", location: "Enugu State", status: "ongoing", coverImageUrl: "", createdAt: "2026-04-01T00:00:00Z", updatedAt: "2026-04-01T00:00:00Z" },
  { id: "pr5", title: "Health Outreach Programme", slug: "health-outreach-programme", description: "Free medical screenings and health education for 1,000 residents in rural areas.", location: "Nsukka", status: "completed", coverImageUrl: "", createdAt: "2026-05-01T00:00:00Z", updatedAt: "2026-05-01T00:00:00Z" },
];

const mockContactMessages: ContactMessage[] = [
  { id: "c1", fullName: "John Doe", email: "john@example.com", subject: "Partnership inquiry", message: "I would like to discuss a potential partnership between my organisation and the foundation.", status: "unread", createdAt: "2026-07-01T10:00:00Z" },
  { id: "c2", fullName: "Jane Smith", email: "jane@example.com", subject: "Volunteering opportunities", message: "I'm interested in volunteering with your organisation. Please let me know about current opportunities.", status: "read", createdAt: "2026-06-28T14:30:00Z" },
  { id: "c3", fullName: "Dr. Adebayo Ogunlesi", email: "adebayo@example.com", subject: "Medical outreach collaboration", message: "I am a medical doctor interested in collaborating on your upcoming health outreach in Nsukka.", status: "responded", createdAt: "2026-06-25T09:15:00Z" },
  { id: "c4", fullName: "Chioma Eze", email: "chioma@example.com", subject: "Donation receipt", message: "I made a donation last week but haven't received my receipt yet. Could you please follow up?", status: "unread", createdAt: "2026-07-02T16:45:00Z" },
  { id: "c5", fullName: "Michael Okonkwo", email: "michael@example.com", subject: "General inquiry", message: "I would like to learn more about your scholarship programme and how to apply for my daughter.", status: "read", createdAt: "2026-06-30T11:00:00Z" },
];

const mockVolunteerSubmissions: VolunteerSubmission[] = [
  { id: "v1", fullName: "Amara Nwachukwu", email: "amara@example.com", phone: "08031234567", areaOfInterest: "Education", message: "I am a certified teacher and would love to volunteer with the education initiative.", status: "pending", createdAt: "2026-07-01T10:00:00Z" },
  { id: "v2", fullName: "Emeka Okafor", email: "emeka@example.com", phone: "08039876543", areaOfInterest: "Healthcare", message: "I am a nurse and can help with the health awareness campaigns.", status: "reviewed", createdAt: "2026-06-25T14:30:00Z" },
  { id: "v3", fullName: "Ngozi Obi", email: "ngozi@example.com", phone: "07061223344", areaOfInterest: "Fundraising", message: "I have experience in event planning and fundraising. I'd like to contribute.", status: "pending", createdAt: "2026-07-03T09:00:00Z" },
  { id: "v4", fullName: "Chidi Ani", email: "chidi@example.com", phone: "09087654321", areaOfInterest: "Agriculture", message: "I am an agronomist and can help with community farming projects.", status: "contacted", createdAt: "2026-06-20T16:15:00Z" },
  { id: "v5", fullName: "Ifeoma Okoro", email: "ifeoma@example.com", phone: "08055557777", areaOfInterest: "Administration", message: "I have administrative experience and would like to support the foundation's office operations.", status: "pending", createdAt: "2026-07-04T12:00:00Z" },
];

const mockGalleryImages: GalleryImage[] = [
  { id: "g1", imageUrl: "/images/918104b48623a6d997a17a9a8a03567739e23fbf.jpg", caption: "Back to School Drive 2025", category: "Education", createdAt: "2026-01-01T00:00:00Z" },
  { id: "g2", imageUrl: "/images/ebde0f20909875bfb504427887ada502c3c38648.jpg", caption: "Women Skills Bootcamp Graduation", category: "Women Empowerment", createdAt: "2026-02-01T00:00:00Z" },
  { id: "g3", imageUrl: "/images/b146d95d118b6f0b23c31c4d91959f1e86ca36fc.jpg", caption: "Orphanage Welfare Visit", category: "Child Welfare", createdAt: "2026-03-01T00:00:00Z" },
];

let stories = [...mockStories];
let programs = [...mockPrograms];
let projects = [...mockProjects];
let contactMessages = [...mockContactMessages];
let volunteerSubmissions = [...mockVolunteerSubmissions];
let galleryImages = [...mockGalleryImages];

function generateId() {
  return crypto.randomUUID();
}

export function resetMockData() {
  stories = [...mockStories];
  programs = [...mockPrograms];
  projects = [...mockProjects];
  contactMessages = [...mockContactMessages];
  volunteerSubmissions = [...mockVolunteerSubmissions];
  galleryImages = [...mockGalleryImages];
}

export async function getStories(): Promise<Story[]> {
  return [...stories];
}

export async function getStoryById(id: string): Promise<Story | null> {
  return stories.find((s) => s.id === id) || null;
}

export async function createStory(
  data: Omit<Story, "id" | "createdAt" | "updatedAt">
): Promise<Story> {
  const now = new Date().toISOString();
  const story: Story = { id: generateId(), ...data, createdAt: now, updatedAt: now };
  stories.unshift(story);
  return story;
}

export async function updateStory(
  id: string,
  data: Partial<Omit<Story, "id" | "createdAt" | "updatedAt">>
): Promise<Story | null> {
  const idx = stories.findIndex((s) => s.id === id);
  if (idx === -1) return null;
  stories[idx] = { ...stories[idx], ...data, updatedAt: new Date().toISOString() };
  return stories[idx];
}

export async function deleteStory(id: string): Promise<boolean> {
  const len = stories.length;
  stories = stories.filter((s) => s.id !== id);
  return stories.length < len;
}

export async function getPrograms(): Promise<Program[]> {
  return [...programs];
}

export async function getProgramById(id: string): Promise<Program | null> {
  return programs.find((p) => p.id === id) || null;
}

export async function createProgram(
  data: Omit<Program, "id" | "createdAt" | "updatedAt">
): Promise<Program> {
  const now = new Date().toISOString();
  const program: Program = {
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  programs.unshift(program);
  return program;
}

export async function updateProgram(
  id: string,
  data: Partial<Omit<Program, "id" | "createdAt" | "updatedAt">>
): Promise<Program | null> {
  const idx = programs.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  programs[idx] = { ...programs[idx], ...data, updatedAt: new Date().toISOString() };
  return programs[idx];
}

export async function deleteProgram(id: string): Promise<boolean> {
  const len = programs.length;
  programs = programs.filter((p) => p.id !== id);
  return programs.length < len;
}

export async function getProjects(): Promise<Project[]> {
  return [...projects];
}

export async function getProjectById(id: string): Promise<Project | null> {
  return projects.find((p) => p.id === id) || null;
}

export async function createProject(
  data: Omit<Project, "id" | "createdAt" | "updatedAt">
): Promise<Project> {
  const now = new Date().toISOString();
  const project: Project = {
    id: generateId(),
    ...data,
    createdAt: now,
    updatedAt: now,
  };
  projects.unshift(project);
  return project;
}

export async function updateProject(
  id: string,
  data: Partial<Omit<Project, "id" | "createdAt" | "updatedAt">>
): Promise<Project | null> {
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  projects[idx] = { ...projects[idx], ...data, updatedAt: new Date().toISOString() };
  return projects[idx];
}

export async function deleteProject(id: string): Promise<boolean> {
  const len = projects.length;
  projects = projects.filter((p) => p.id !== id);
  return projects.length < len;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  return [...contactMessages];
}

export async function getContactMessageById(
  id: string
): Promise<ContactMessage | null> {
  return contactMessages.find((m) => m.id === id) || null;
}

export async function updateContactMessage(
  id: string,
  data: Partial<Pick<ContactMessage, "status">>
): Promise<ContactMessage | null> {
  const idx = contactMessages.findIndex((m) => m.id === id);
  if (idx === -1) return null;
  contactMessages[idx] = { ...contactMessages[idx], ...data };
  return contactMessages[idx];
}

export async function deleteContactMessage(id: string): Promise<boolean> {
  const len = contactMessages.length;
  contactMessages = contactMessages.filter((m) => m.id !== id);
  return contactMessages.length < len;
}

export async function getVolunteerSubmissions(): Promise<VolunteerSubmission[]> {
  return [...volunteerSubmissions];
}

export async function getVolunteerSubmissionById(
  id: string
): Promise<VolunteerSubmission | null> {
  return volunteerSubmissions.find((v) => v.id === id) || null;
}

export async function updateVolunteerSubmission(
  id: string,
  data: Partial<Pick<VolunteerSubmission, "status">>
): Promise<VolunteerSubmission | null> {
  const idx = volunteerSubmissions.findIndex((v) => v.id === id);
  if (idx === -1) return null;
  volunteerSubmissions[idx] = { ...volunteerSubmissions[idx], ...data };
  return volunteerSubmissions[idx];
}

export async function deleteVolunteerSubmission(id: string): Promise<boolean> {
  const len = volunteerSubmissions.length;
  volunteerSubmissions = volunteerSubmissions.filter((v) => v.id !== id);
  return volunteerSubmissions.length < len;
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  return [...galleryImages];
}

export async function getDashboardStats() {
  return {
    totalStories: stories.length,
    totalPrograms: programs.length,
    totalProjects: projects.length,
    unreadMessages: contactMessages.filter((m) => m.status === "unread").length,
    pendingVolunteers: volunteerSubmissions.filter((v) => v.status === "pending")
      .length,
  };
}
