"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FolderKanban,
  HeartHandshake,
  LayoutDashboard,
  Images,
  GalleryHorizontal,
  PanelsTopLeft,
  LogOut,
  Menu,
  MessageSquare,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import { logoutAction } from "@/app/admin/login/actions";
import { PlatformLogo } from "@/components/common/platform-logo";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/public-data", label: "Public Data", icon: PanelsTopLeft },
  { href: "/dashboard/stories", label: "Stories", icon: BookOpen },
  { href: "/dashboard/programs", label: "Programs", icon: HeartHandshake },
  { href: "/dashboard/projects", label: "Projects", icon: FolderKanban },
  { href: "/dashboard/media", label: "Media", icon: Images },
  { href: "/dashboard/gallery", label: "Gallery", icon: GalleryHorizontal },
  { href: "/dashboard/contact", label: "Messages", icon: MessageSquare },
  { href: "/dashboard/volunteers", label: "Volunteers", icon: Users },
  { href: "/dashboard/admins", label: "Administrators", icon: ShieldCheck },
];

type AdminShellProps = {
  admin: { name: string; email: string; isDefault: boolean };
  children: React.ReactNode;
};

export function AdminShell({ admin, children }: AdminShellProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const visibleSidebarLinks = admin.isDefault
    ? sidebarLinks
    : sidebarLinks.filter((link) => link.href !== "/dashboard/admins");

  const navigation = (
    <>
      <div className="flex h-20 items-center border-b !border-[#4a3d30] px-5">
        <PlatformLogo
          showName
          imageClassName="h-12 w-12 rounded-lg"
          className="!text-[#fff8eb]"
        />
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {visibleSidebarLinks.map((link) => {
            const isActive =
              link.href === "/dashboard"
                ? pathname === link.href
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                    isActive
                      ? "!bg-[#d39a05] !text-[#17120d] shadow-sm"
                      : "!text-[#e8dfcf] hover:!bg-[#382e24] hover:!text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t !border-[#4a3d30] p-4">
        <Link
          href="/"
          className="text-xs font-medium !text-[#d8cdbb] transition hover:!text-white"
        >
          &larr; View public website
        </Link>
      </div>
    </>
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="hidden w-72 shrink-0 flex-col !bg-[#211b15] lg:flex">
        {navigation}
      </aside>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <aside className="relative flex h-full w-72 flex-col !bg-[#211b15] shadow-2xl">
            <button
              type="button"
              aria-label="Close navigation"
              className="absolute right-3 top-3 rounded-lg p-2 !text-[#e8dfcf] hover:!bg-[#382e24] hover:!text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            {navigation}
          </aside>
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 sm:px-6">
          <button
            type="button"
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            aria-label="Open admin navigation"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <p className="hidden text-sm font-semibold text-[#17191f] lg:block">
            Platform Administration
          </p>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium text-[#17191f]">{admin.name}</p>
              <p className="text-xs text-muted-foreground">{admin.email}</p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8860b] text-sm font-bold text-white">
              {admin.name.charAt(0).toUpperCase()}
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                aria-label="Sign out"
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-[#17191f]"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </form>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
