import Link from "next/link";
import {
  getDashboardStats,
} from "@/db/queries";
import {
  BookOpen,
  HeartHandshake,
  FolderKanban,
  MessageSquare,
  Users,
} from "lucide-react";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  const cards = [
    { label: "Stories", value: stats.totalStories, icon: BookOpen, href: "/dashboard/stories", color: "bg-blue-500" },
    { label: "Programs", value: stats.totalPrograms, icon: HeartHandshake, href: "/dashboard/programs", color: "bg-green-500" },
    { label: "Projects", value: stats.totalProjects, icon: FolderKanban, href: "/dashboard/projects", color: "bg-purple-500" },
    { label: "Unread Messages", value: stats.unreadMessages, icon: MessageSquare, href: "/dashboard/contact", color: "bg-amber-500" },
    { label: "Pending Volunteers", value: stats.pendingVolunteers, icon: Users, href: "/dashboard/volunteers", color: "bg-rose-500" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#17191f]">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Overview of your foundation's content and submissions.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link key={card.href} href={card.href}>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold text-[#17191f]">
                    {card.value}
                  </p>
                </div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.color} bg-opacity-10`}
                >
                  <card.icon className={`h-6 w-6 text-white`} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="text-lg font-semibold text-[#17191f]">Quick Actions</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/dashboard/stories/new"
            className="rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-[#b8860b] hover:text-[#b8860b]"
          >
            + New Story
          </Link>
          <Link
            href="/dashboard/programs/new"
            className="rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-[#b8860b] hover:text-[#b8860b]"
          >
            + New Program
          </Link>
          <Link
            href="/dashboard/projects/new"
            className="rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-[#b8860b] hover:text-[#b8860b]"
          >
            + New Project
          </Link>
          <Link
            href="/dashboard/contact"
            className="rounded-lg border border-gray-200 px-4 py-3 text-center text-sm font-medium text-gray-700 transition hover:border-[#b8860b] hover:text-[#b8860b]"
          >
            View Messages
          </Link>
        </div>
      </div>
    </div>
  );
}
