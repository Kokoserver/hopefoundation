import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  FolderKanban,
  GalleryHorizontal,
  HeartHandshake,
  LayoutDashboard,
  MessageSquare,
  Newspaper,
  PencilLine,
  Settings,
  Sparkles,
  UploadCloud,
  Users,
} from "lucide-react";
import { getDashboardStats } from "@/db/queries";

const numberFormatter = new Intl.NumberFormat("en");

function formatNumber(value: number) {
  return numberFormatter.format(value);
}

export default async function DashboardPage() {
  const stats = await getDashboardStats();
  const totalContent =
    stats.totalStories + stats.totalPrograms + stats.totalProjects;
  const needsAttention = stats.unreadMessages + stats.pendingVolunteers;

  const statCards = [
    {
      label: "Stories",
      value: stats.totalStories,
      helper: "Published and draft impact stories",
      icon: BookOpen,
      href: "/dashboard/stories",
      tone: "!bg-blue-50 !text-blue-700",
      ring: "!border-blue-100",
    },
    {
      label: "Programs",
      value: stats.totalPrograms,
      helper: "Programmes displayed on the website",
      icon: HeartHandshake,
      href: "/dashboard/programs",
      tone: "!bg-emerald-50 !text-emerald-700",
      ring: "!border-emerald-100",
    },
    {
      label: "Projects",
      value: stats.totalProjects,
      helper: "Active and planned foundation projects",
      icon: FolderKanban,
      href: "/dashboard/projects",
      tone: "!bg-purple-50 !text-purple-700",
      ring: "!border-purple-100",
    },
    {
      label: "Unread Messages",
      value: stats.unreadMessages,
      helper: "Contact form messages to review",
      icon: MessageSquare,
      href: "/dashboard/contact",
      tone: "!bg-amber-50 !text-amber-700",
      ring: "!border-amber-100",
    },
    {
      label: "Pending Volunteers",
      value: stats.pendingVolunteers,
      helper: "Volunteer applications awaiting action",
      icon: Users,
      href: "/dashboard/volunteers",
      tone: "!bg-rose-50 !text-rose-700",
      ring: "!border-rose-100",
    },
  ];

  const quickActions = [
    {
      label: "Update Homepage",
      description: "Edit public homepage text and images",
      href: "/dashboard/public-data",
      icon: PencilLine,
      primary: true,
    },
    {
      label: "Upload Media",
      description: "Add images or videos to Bunny CDN",
      href: "/dashboard/media",
      icon: UploadCloud,
    },
    {
      label: "Add Gallery Image",
      description: "Upload images and control visibility",
      href: "/dashboard/gallery",
      icon: GalleryHorizontal,
    },
    {
      label: "Create Story",
      description: "Publish a new hope story",
      href: "/dashboard/stories/new",
      icon: Newspaper,
    },
  ];

  const managementLinks = [
    { label: "Programs", href: "/dashboard/programs", value: stats.totalPrograms },
    { label: "Projects", href: "/dashboard/projects", value: stats.totalProjects },
    { label: "Gallery", href: "/dashboard/gallery", value: "Media" },
    { label: "Administrators", href: "/dashboard/admins", value: "Access" },
  ];

  return (
    <div className="space-y-8">
      <section className="overflow-hidden rounded-3xl !bg-[#211b15] shadow-sm">
        <div className="relative grid gap-8 p-6 text-white sm:p-8 lg:grid-cols-[1.35fr_0.65fr] lg:p-10">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full !bg-gold/20 blur-3xl" />
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 !bg-white/10 px-3 py-1 text-xs font-semibold !text-white">
              <LayoutDashboard className="h-3.5 w-3.5" />
              Platform Overview
            </div>
            <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Manage content, messages, and public updates from one place.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-6 !text-white/75">
              Keep the homepage current, review important submissions, and
              manage the programmes, projects, stories, and gallery shown on
              the public website.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/dashboard/public-data"
                className="inline-flex h-10 items-center gap-2 rounded-full !bg-gold px-5 text-sm font-bold !text-white hover:!bg-gold/90"
              >
                Update public data
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold !text-white hover:!bg-white/10"
              >
                View website
              </Link>
            </div>
          </div>

          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 !bg-white/10 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-wider !text-white/60">
                Content Items
              </p>
              <p className="mt-2 text-4xl font-bold !text-white">
                {formatNumber(totalContent)}
              </p>
              <p className="mt-2 text-xs !text-white/65">
                Stories, programmes, and projects
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 !bg-white p-5 text-[#17191f]">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold" />
                <p className="text-xs font-semibold uppercase tracking-wider !text-gray-500">
                  Needs Attention
                </p>
              </div>
              <p className="mt-2 text-4xl font-bold !text-[#17191f]">
                {formatNumber(needsAttention)}
              </p>
              <p className="mt-2 text-xs !text-gray-500">
                Unread messages and pending volunteers
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {statCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`group rounded-2xl border ${card.ring} !bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className={`rounded-xl ${card.tone} p-3`}>
                <card.icon className="h-5 w-5" />
              </div>
              <ArrowRight className="h-4 w-4 !text-gray-300 transition group-hover:translate-x-1 group-hover:!text-gold" />
            </div>
            <p className="mt-5 text-3xl font-bold !text-[#17191f]">
              {formatNumber(card.value)}
            </p>
            <p className="mt-1 text-sm font-semibold !text-[#17191f]">
              {card.label}
            </p>
            <p className="mt-2 text-xs leading-5 !text-gray-500">
              {card.helper}
            </p>
          </Link>
        ))}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
        <section className="rounded-3xl border border-gray-200 !bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold !text-[#17191f]">
                Quick Actions
              </h2>
              <p className="mt-1 text-sm !text-gray-500">
                Common tasks for keeping the platform up to date.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {quickActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                className={
                  action.primary
                    ? "group rounded-2xl !bg-gold p-5 !text-white shadow-sm transition hover:!bg-gold/90"
                    : "group rounded-2xl border border-gray-200 !bg-gray-50 p-5 transition hover:border-gold/40 hover:!bg-white"
                }
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={
                      action.primary
                        ? "rounded-xl !bg-white/20 p-3"
                        : "rounded-xl !bg-white p-3 !text-gold shadow-sm"
                    }
                  >
                    <action.icon className="h-5 w-5" />
                  </div>
                  <ArrowRight
                    className={
                      action.primary
                        ? "h-4 w-4 !text-white/80 transition group-hover:translate-x-1"
                        : "h-4 w-4 !text-gray-300 transition group-hover:translate-x-1 group-hover:!text-gold"
                    }
                  />
                </div>
                <p
                  className={
                    action.primary
                      ? "mt-4 font-bold !text-white"
                      : "mt-4 font-bold !text-[#17191f]"
                  }
                >
                  {action.label}
                </p>
                <p
                  className={
                    action.primary
                      ? "mt-1 text-sm !text-white/80"
                      : "mt-1 text-sm !text-gray-500"
                  }
                >
                  {action.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-gray-200 !bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl !bg-[#211b15] p-3 !text-white">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold !text-[#17191f]">
                Manage
              </h2>
              <p className="text-sm !text-gray-500">
                Jump to key sections.
              </p>
            </div>
          </div>

          <div className="mt-5 divide-y divide-gray-100">
            {managementLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between gap-3 py-3 text-sm transition hover:pl-1"
              >
                <span className="font-semibold !text-[#17191f]">
                  {link.label}
                </span>
                <span className="inline-flex items-center gap-2 !text-gray-500">
                  {typeof link.value === "number"
                    ? formatNumber(link.value)
                    : link.value}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
