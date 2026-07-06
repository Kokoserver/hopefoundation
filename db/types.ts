export type Story = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  coverImageUrl: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type Program = {
  id: string;
  title: string;
  slug: string;
  tag: string;
  description: string;
  fullDescription: string;
  beneficiaries: string;
  location: string;
  coverImageUrl: string;
  goals: string[];
  outcomes: string[];
  createdAt: string;
  updatedAt: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  location: string;
  status: string;
  coverImageUrl: string;
  createdAt: string;
  updatedAt: string;
};

export type ContactMessage = {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
};

export type VolunteerSubmission = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  message: string;
  status: string;
  createdAt: string;
};

export type GalleryImage = {
  id: string;
  imageUrl: string;
  caption: string;
  category: string;
  createdAt: string;
};

