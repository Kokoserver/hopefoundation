"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { OptimizedImage } from "@/components/common/optimized-image";
import { publicPages } from "@/lib/public-pages";

const contactCardIcons: Record<string, React.ReactNode> = {
  Email: <Mail className="mb-5 h-6 w-6 text-gold" />,
  Phone: <Phone className="mb-5 h-6 w-6 text-gold" />,
  Address: <MapPin className="mb-5 h-6 w-6 text-gold" />,
};

export default function ContactPage() {
  const page = publicPages.contact;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-footer pt-28 text-white sm:pt-32">
        <div className="absolute inset-0">
          <OptimizedImage
            src={page.image}
            alt={page.imageAlt}
            fill
            priority
            quality={90}
            className="object-cover object-center opacity-55"
            showPlaceholder={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-footer" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-16 sm:px-10 sm:pb-24 sm:pt-20 lg:px-[72px]">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
              {page.eyebrow}
            </p>
            <h1 className="max-w-4xl text-[38px] font-bold leading-[1.08] sm:text-[56px] lg:text-[64px]">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.65] text-white/88 sm:text-[17px]">
              {page.description}
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-10">
            <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-white">
              {page.overviewKicker}
            </span>
            <h2 className="mt-5 max-w-xl text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              Get in touch with us
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="mb-4 text-[18px] font-bold text-[#17191f]">
                {page.overviewTitle}
              </h3>
              <p className="mb-6 max-w-sm text-[13px] leading-[1.6] text-muted-foreground">
                {page.cardsDescription}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {page.cards.map((card) => (
                <Card
                  key={card.title}
                  className="rounded-[20px] border-0 bg-[#f7ebe8] shadow-none"
                >
                  <CardContent className="p-6">
                    {contactCardIcons[card.title]}
                    <h3 className="mb-2 text-[18px] font-bold text-[#17191f]">
                      {card.title}
                    </h3>
                    <p className="text-[13px] leading-[1.6] text-[#342b25]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>

            <div className="rounded-[22px] border border-[#eadfcd] bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)] sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="mb-4 h-16 w-16 text-gold" />
                  <h3 className="mb-2 text-[22px] font-bold text-[#17191f]">
                    Message sent successfully!
                  </h3>
                  <p className="max-w-sm text-[14px] leading-[1.65] text-[#4f4a43]">
                    Thank you for reaching out. Our team will get back to you
                    within 48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-6 text-[20px] font-bold text-[#17191f]">
                    Send us a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-[13px] font-semibold text-[#17191f]"
                        >
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="rounded-xl border-[#eadfcd]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-[13px] font-semibold text-[#17191f]"
                        >
                          Email Address
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="rounded-xl border-[#eadfcd]"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-[13px] font-semibold text-[#17191f]"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="How can we help you?"
                        required
                        className="rounded-xl border-[#eadfcd]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-[13px] font-semibold text-[#17191f]"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        required
                        className="rounded-xl border-[#eadfcd]"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="h-11 rounded-full bg-gold px-7 text-[12px] font-bold text-white hover:bg-gold/90"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[30px] font-bold leading-tight text-[#17191f] sm:text-[40px]">
              Ways to connect
            </h2>
            <p className="max-w-md text-[13px] leading-[1.6] text-muted-foreground">
              {page.sections
                .map((s) => s.title)
                .join(", ")}
              {" \u2014 "}we are here to help.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {page.sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[22px] border border-[#eadfcd] bg-white p-6 shadow-[0_10px_30px_rgba(105,77,32,0.06)]"
              >
                <h3 className="mb-3 text-[18px] font-bold text-[#17191f]">
                  {section.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[#4f4a43]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
