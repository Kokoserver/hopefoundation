"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { PlatformLogo } from "@/components/common/platform-logo";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header
      className={
        isHomePage
          ? "absolute left-0 right-0 top-0 z-50 w-full bg-[#1b1712]/90 shadow-sm backdrop-blur-md"
          : "sticky top-0 z-50 w-full bg-[#1b1712] shadow-sm"
      }
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-4 sm:px-8 lg:px-[72px]">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <PlatformLogo imageClassName="h-14 w-14 object-contain sm:h-16 sm:w-16" />
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-[22px]">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={item.href}
                    className="px-0 py-2 text-[14px] font-medium !text-white transition-colors hover:!text-white/80"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="h-9 rounded-full bg-gold px-4 text-[11px] font-bold !text-white hover:bg-gold/90 sm:h-[40px] sm:px-[22px] sm:text-[12px]"
          >
            <Link href="/donate">Donate</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="hidden h-[40px] rounded-full border-white !bg-transparent px-[22px] text-[12px] font-bold !text-white hover:!bg-white/10 hover:!text-white sm:inline-flex"
          >
            <Link href="/volunteer">Volunteer</Link>
          </Button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/15 text-white backdrop-blur-sm md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="mx-4 rounded-3xl border border-white/15 bg-[#17110d]/95 p-4 text-white shadow-2xl backdrop-blur-md md:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            variant="outline"
            className="mt-3 h-10 w-full rounded-full border-white/70 !bg-transparent text-[12px] font-bold !text-white hover:!bg-white/10 hover:!text-white"
          >
            <Link href="/volunteer">Volunteer</Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
