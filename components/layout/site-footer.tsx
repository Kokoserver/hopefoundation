"use client";

import Link from "next/link";
import { PlatformLogo } from "@/components/common/platform-logo";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Partners", href: "/partners" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { label: "Education Support Programs", href: "/services/education-support-programs" },
      { label: "Community Healthcare Services", href: "/services/community-healthcare-services" },
      { label: "Food & Nutrition Assistance", href: "/services/food-and-nutrition-assistance" },
      { label: "Shelter & Housing Support", href: "/services/shelter-and-housing-support" },
      { label: "Emergency & Disaster Relief", href: "/services/emergency-and-disaster-relief" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/faq" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Disclaimer", href: "/terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="brand-dark-pattern text-white">
      <div className="mx-auto max-w-[1300px] px-6 py-24 sm:px-10">
        <div className="relative mb-20 overflow-hidden rounded-[16px] border border-white/10 bg-white/12 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.16)] backdrop-blur md:flex md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-primary" />
          <h2 className="text-[32px] font-semibold leading-tight tracking-[-0.045em] md:text-[42px]">
            Subscribe to our newsletter
          </h2>
          <form className="mt-6 flex overflow-hidden rounded-[8px] border border-white/10 bg-white/12 p-1.5 md:mt-0 md:w-[500px]">
            <input
              aria-label="Email Address"
              className="min-w-0 flex-1 bg-transparent px-5 text-[15px] text-white outline-none placeholder:text-white/82"
              placeholder="Enter Email Address"
            />
            <button
              type="button"
              className="rounded-[5px] bg-primary px-7 py-3 text-[14px] font-semibold text-white shadow-[0_10px_24px_rgba(188,113,8,0.24)] transition hover:bg-primary/90"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-10 border-b border-white/10 pb-20 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1.35fr_1fr]">
          <div>
            <Link href="/" className="flex items-center">
              <PlatformLogo imageClassName="h-20 w-20" />
            </Link>
            <p className="mt-7 max-w-[350px] text-[16px] leading-7 text-white/82">
              We are dedicated to making a difference by supporting empowering lives.
            </p>
            <div className="mt-9 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                {["p", "𝕏", "f", "◎"].map((item) => (
                  <span
                    key={item}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/16 bg-white/6 text-[16px] font-semibold text-white/82 transition hover:border-primary hover:bg-primary hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-7 text-[19px] font-semibold text-white">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}-${link.href}`}>
                    <span className="mr-3 text-primary">•</span>
                    <Link href={link.href} className="text-[16px] text-white/82 transition hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="pt-14 text-center text-[16px] text-white/78">
          Copyright © 2026 Giveon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
