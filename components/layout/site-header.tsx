"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { PlatformLogo } from "@/components/common/platform-logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "More", href: "/programs", hasMenu: true },
  { label: "Contact Us", href: "/contact" },
];

const pageLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Partners", href: "/partners" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Gallery", href: "/gallery" },
  { label: "Videos", href: "/videos" },
  { label: "FAQs", href: "/faq" },
  { label: "Donate", href: "/donate" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-50 pt-8">
      <div className="mx-auto max-w-[1300px] px-6 sm:px-10">
        <div className="flex h-[78px] items-center justify-between rounded-[16px] bg-white px-5 shadow-[0_8px_30px_rgba(15,23,42,0.12)]">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <PlatformLogo imageClassName="h-16 w-16" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.hasMenu
                    ? pageLinks.some((link) => pathname.startsWith(link.href))
                    : pathname.startsWith(item.href);

              if (item.hasMenu) {
                return (
                  <div key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 text-[13px] font-semibold transition ${
                        active ? "text-primary" : "text-[#2A1708] hover:text-primary"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="h-3.5 w-3.5" />
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="rounded-[12px] bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.14)]">
                        {pageLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className={`block rounded-[8px] px-3 py-2 text-[12px] font-semibold transition ${
                              pathname.startsWith(link.href)
                                ? "bg-[#f4f4f4] text-primary"
                                : "text-[#2A1708] hover:bg-[#f4f4f4] hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-1.5 text-[13px] font-semibold transition ${
                    active ? "text-primary" : "text-[#2A1708] hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link
            href="/donate"
            className="primary-cta hidden items-center gap-3 rounded-[6px] bg-primary py-2.5 pl-5 pr-2 text-[14px] font-semibold text-white hover:bg-accent sm:flex"
          >
            Donation
            <span className="flex h-9 w-9 items-center justify-center rounded-[5px] bg-white text-[#2A1708]">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-[#2A1708] lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-[16px] bg-white p-4 shadow-xl lg:hidden">
            <nav className="grid gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-[#2A1708] hover:bg-[#f4f4f4] hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="grid gap-1 border-t border-[#e8e8e8] pt-2">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-6 py-2 text-sm font-semibold text-[#2A1708] hover:bg-[#f4f4f4] hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/donate"
                className="mt-2 rounded-lg bg-primary px-3 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Donation
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
