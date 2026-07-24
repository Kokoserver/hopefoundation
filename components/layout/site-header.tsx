"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navItems, supportLinks } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { PlatformLogo } from "@/components/common/platform-logo";
import {
  NavigationMenuContent,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className="h-9 bg-transparent px-2 text-[11px] font-bold uppercase tracking-[0.02em] !text-white hover:bg-white/10 focus:bg-white/10 data-[state=open]:bg-white/10 [&>svg]:hidden">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[360px] rounded-2xl border border-[#eadfcd] bg-white p-3 shadow-xl">
                        {item.featured ? (
                          <div className="mb-2 rounded-xl bg-footer p-4 text-white">
                            <p className="text-[12px] font-bold text-gold">
                              Flagship Initiative
                            </p>
                            <p className="mt-2 text-[12px] leading-relaxed text-white/75">
                              {item.description}
                            </p>
                          </div>
                        ) : null}
                        <div className="grid grid-cols-2 gap-1">
                          {item.items.map((child) => (
                            <NavigationMenuLink
                              key={`${item.label}-${child.label}-${child.href}`}
                              asChild
                            >
                              <Link
                                href={child.href}
                                className="rounded-xl px-3 py-2 text-[12px] font-medium text-[#241E18] transition hover:bg-[#f8e4e1] hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="px-2 py-2 text-[11px] font-bold uppercase tracking-[0.02em] !text-white transition-colors hover:!text-white/80"
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <div className="group relative hidden sm:block">
            <Button
              asChild
              className="h-9 rounded-full bg-gold px-4 text-[11px] font-bold !text-white hover:bg-gold/90 sm:h-[40px] sm:px-[22px] sm:text-[12px]"
            >
              <Link href="/donate">Support Our Work</Link>
            </Button>
            <div className="invisible absolute right-0 top-[calc(100%+10px)] z-50 w-56 rounded-2xl border border-[#eadfcd] bg-white p-3 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {supportLinks.map((link) => (
                <Link
                  key={`desktop-support-${link.label}-${link.href}`}
                  href={link.href}
                  className="block rounded-xl px-3 py-2 text-[12px] font-medium text-[#241E18] transition hover:bg-[#f8e4e1] hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Button
            asChild
            variant="outline"
            className="hidden h-[40px] rounded-full border-white !bg-transparent px-[22px] text-[12px] font-bold !text-white hover:!bg-white/10 hover:!text-white xl:inline-flex"
          >
            <Link href="/aada">AADA</Link>
          </Button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-black/15 text-white backdrop-blur-sm lg:hidden"
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
        <div className="mx-4 rounded-3xl border border-white/15 bg-[#17110d]/95 p-4 text-white shadow-2xl backdrop-blur-md lg:hidden">
          <nav className="grid gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="rounded-2xl px-4 py-3">
                <Link
                  href={item.href}
                  className="text-sm font-semibold transition hover:text-white/80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.items ? (
                  <div className="mt-2 grid gap-1">
                    {item.items.map((child) => (
                      <Link
                        key={`mobile-${item.label}-${child.label}-${child.href}`}
                        href={child.href}
                        className="rounded-xl py-1.5 text-[12px] text-white/68 transition hover:text-white"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
          <div className="mt-3 grid gap-1 rounded-2xl bg-white/5 p-3">
            <p className="px-1 text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
              Support Our Work
            </p>
            {supportLinks.map((link) => (
              <Link
                key={`mobile-support-${link.label}-${link.href}`}
                href={link.href}
                className="rounded-xl px-1 py-1.5 text-[12px] text-white/72 transition hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-3 h-10 w-full rounded-full border-white/70 !bg-transparent text-[12px] font-bold !text-white hover:!bg-white/10 hover:!text-white"
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
