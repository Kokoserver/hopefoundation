import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  FolderKanban,
  Users,
  HeartHandshake,
  Megaphone,
  Image,
  Newspaper,
} from "lucide-react";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/stories", label: "Stories", icon: BookOpen },
  { href: "/dashboard/programs", label: "Programs", icon: HeartHandshake },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/contact", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/volunteers", label: "Volunteers", icon: Users },
  { href: "/dashboard/gallery", label: "Gallery", icon: Image },
  { href: "/dashboard/blog", label: "Blog", icon: Newspaper },
  { href: "/dashboard/testimonials", label: "Testimonials", icon: Megaphone },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b8860b] text-sm font-bold text-white">
              A
            </div>
            <div>
              <p className="text-sm font-semibold text-[#17191f]">Dashboard</p>
              <p className="text-[10px] text-muted-foreground">
                Achebe Hope Foundation
              </p>
            </div>
          </div>
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-[#17191f]"
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="border-t border-gray-200 p-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-[#17191f]"
            >
              &larr; Back to site
            </Link>
          </div>
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            aria-label="Open menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b8860b] text-sm font-bold text-white">
              A
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
