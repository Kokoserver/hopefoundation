"use client";

import Link from "next/link";
import Image from "next/image";
import {
  footerLinks,
  contactInfo,
  socialLinks,
  supportLinks,
} from "@/lib/site-config";
import { NewsletterForm } from "@/components/common/newsletter-form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import * as Icons from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-footer-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="max-w-sm text-[22px] font-semibold leading-tight text-white sm:text-2xl">
            Subscribe to our mailing list for updates
          </h3>
          <NewsletterForm className="w-full sm:w-[320px]" />
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4 xl:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex flex-col items-start gap-4">
              <Image
                src="/logo.svg"
                alt="Achebe Hope Foundation Logo"
                width={160}
                height={160}
                className="h-24 w-24 object-contain sm:h-32 sm:w-32"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-footer-foreground/70">
              Achebe Hope Foundation is a registered nonprofit committed to
              restoring dignity, strengthening families, and creating lasting
              opportunity across underserved communities.
            </p>
            <Button
              asChild
              className="mt-5 h-10 rounded-full bg-gold px-5 text-[12px] font-bold text-white hover:bg-gold/90"
            >
              <Link href="/donate">Support Our Work</Link>
            </Button>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-[13px] font-semibold text-white">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={`${group.title}-${item.label}-${item.href}`}>
                    <Link
                      href={item.href}
                      className="text-[12px] text-footer-foreground/70 transition hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-3 text-[13px] font-semibold text-white">
              Support Our Work
            </h4>
            <ul className="space-y-2">
              {supportLinks.map((item) => (
                <li key={`footer-support-${item.label}-${item.href}`}>
                  <Link
                    href={item.href}
                    className="text-[12px] text-footer-foreground/70 transition hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[13px] font-semibold text-white">
              Contact Us
            </h4>
            <ul className="space-y-2 text-[12px] text-footer-foreground/70">
              <li>
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className="transition hover:text-primary"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition hover:text-primary"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
              <li>
                <Link href="/contact" className="transition hover:text-primary">
                  Newsletter Subscription
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-4 bg-white/10" />

        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-[12px] text-footer-foreground/55">
            All Rights Reserved © {currentYear} Achebe Hope Foundation
          </p>
          {socialLinks.length > 0 ? (
            <div className="flex justify-center gap-2 sm:justify-start">
              {socialLinks.map((social) => {
                const Icon = Icons[
                  social.icon as keyof typeof Icons
                ] as React.ComponentType<{ className?: string }>;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-footer-foreground/70 transition hover:border-primary hover:text-primary"
                    aria-label={social.label}
                  >
                    {Icon && <Icon className="h-3.5 w-3.5" />}
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
