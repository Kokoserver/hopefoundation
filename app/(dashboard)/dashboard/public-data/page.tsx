import {
  getGalleryImages,
  getHomepageContent,
  getSubmenuPages,
} from "@/db/queries";
import { isMediaUploadEnabled } from "@/lib/media";
import { MediaUploadField } from "@/components/dashboard/media-upload-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updatePublicDataAction, updateSubmenuPagesAction } from "./actions";

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5 rounded-xl border border-gray-200 bg-white p-6">
      <div>
        <h2 className="text-lg font-semibold text-[#17191f]">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

export default async function PublicDataPage() {
  const content = await getHomepageContent();
  const submenuPages = await getSubmenuPages();
  const uploadEnabled = isMediaUploadEnabled();
  const galleryImages = await getGalleryImages();
  const submenuEntries = Object.entries(submenuPages);
  const submenuGroups = submenuEntries.reduce<
    Record<string, typeof submenuEntries>
  >((groups, entry) => {
    const [, page] = entry;
    groups[page.eyebrow] = groups[page.eyebrow] ?? [];
    groups[page.eyebrow].push(entry);
    return groups;
  }, {});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#17191f]">Public Data</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Update homepage content using the fields below. Programs and gallery
          images are managed from their dedicated dashboard sections.
        </p>
      </div>

      <form action={updatePublicDataAction} className="space-y-6">
        <Section title="Hero" description="Main homepage headline, buttons, and slideshow.">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="heroEyebrow">Small heading</Label>
              <Input id="heroEyebrow" name="heroEyebrow" defaultValue={content.hero.eyebrow} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="heroTitle">Main heading</Label>
              <Input id="heroTitle" name="heroTitle" defaultValue={content.hero.title} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="heroDescription">Description</Label>
            <Textarea id="heroDescription" name="heroDescription" defaultValue={content.hero.description} rows={4} />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { kind: "Primary", button: content.hero.primaryButton },
              { kind: "Secondary", button: content.hero.secondaryButton },
            ].map(({ kind, button }) => {
              const prefix = kind === "Primary" ? "heroPrimary" : "heroSecondary";
              return (
                <div key={String(kind)} className="grid gap-3 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor={`${prefix}Label`}>{String(kind)} button text</Label>
                    <Input id={`${prefix}Label`} name={`${prefix}Label`} defaultValue={button.label} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`${prefix}Href`}>Button link</Label>
                    <Input id={`${prefix}Href`} name={`${prefix}Href`} defaultValue={button.href} />
                  </div>
                </div>
              );
            })}
          </div>
          <input type="hidden" name="heroSlideCount" value={content.hero.slides.length} />
          <div className="grid gap-4 lg:grid-cols-2">
            {content.hero.slides.map((slide, index) => (
              <div key={index} className="space-y-3 rounded-lg border border-gray-200 p-4">
                <Label htmlFor={`heroSlideSrc_${index}`}>Slide {index + 1}</Label>
                <MediaUploadField id={`heroSlideSrc_${index}`} name={`heroSlideSrc_${index}`} defaultValue={slide.src} enabled={uploadEnabled} galleryImages={galleryImages} />
                <Input name={`heroSlideAlt_${index}`} defaultValue={slide.alt} placeholder="Image description" />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Impact Statistics" description="Numbers displayed beneath the introduction.">
          <div className="space-y-2">
            <Label htmlFor="impactLabel">Section label</Label>
            <Input id="impactLabel" name="impactLabel" defaultValue={content.impact.label} />
          </div>
          <input type="hidden" name="impactStatCount" value={content.impact.stats.length} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.impact.stats.map((stat, index) => (
              <div key={index} className="grid grid-cols-[120px_1fr] gap-3 rounded-lg bg-gray-50 p-4">
                <Input name={`impactValue_${index}`} defaultValue={stat.value} aria-label={`Statistic ${index + 1} value`} />
                <Input name={`impactLabel_${index}`} defaultValue={stat.label} aria-label={`Statistic ${index + 1} label`} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Founder Quote" description="Quote banner shown near the top of the homepage.">
          <Textarea name="quoteText" defaultValue={content.quote.text} rows={3} aria-label="Quote" />
          <Input name="quoteAttribution" defaultValue={content.quote.attribution} aria-label="Quote attribution" />
        </Section>

        <Section title="Opportunity" description="Homepage challenge statement and supporting cards.">
          <Input name="opportunityTitle" defaultValue={content.opportunity.title} aria-label="Opportunity heading" />
          <Textarea name="opportunityFooter" defaultValue={content.opportunity.footer} rows={2} aria-label="Opportunity footer" />
          <input type="hidden" name="opportunityCardCount" value={content.opportunity.cards.length} />
          <div className="grid gap-4 lg:grid-cols-3">
            {content.opportunity.cards.map((card, index) => (
              <div key={index} className="space-y-3 rounded-lg bg-gray-50 p-4">
                <Input name={`opportunityTitle_${index}`} defaultValue={card.title} aria-label={`Card ${index + 1} title`} />
                <Textarea name={`opportunityDescription_${index}`} defaultValue={card.description} rows={4} aria-label={`Card ${index + 1} description`} />
              </div>
            ))}
          </div>
        </Section>

        <Section title="Homepage Video" description="Upload or link the featured video and its poster image.">
          <div className="space-y-2">
            <Label htmlFor="videoLabel">Button text</Label>
            <Input id="videoLabel" name="videoLabel" defaultValue={content.video.label} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="videoPoster">Poster image</Label>
            <MediaUploadField id="videoPoster" name="videoPoster" defaultValue={content.video.poster} enabled={uploadEnabled} galleryImages={galleryImages} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="videoUrl">Video</Label>
            <MediaUploadField id="videoUrl" name="videoUrl" defaultValue={content.video.url} enabled={uploadEnabled} accept="video" />
          </div>
        </Section>

        <Section title="Foundation Message" description="Image, heading, and paragraphs in the message section.">
          <Input name="messageTitle" defaultValue={content.message.title} aria-label="Message heading" />
          <MediaUploadField id="messageImage" name="messageImage" defaultValue={content.message.image} enabled={uploadEnabled} galleryImages={galleryImages} />
          <input type="hidden" name="messageParagraphCount" value={content.message.paragraphs.length} />
          {content.message.paragraphs.map((paragraph, index) => (
            <Textarea key={index} name={`messageParagraph_${index}`} defaultValue={paragraph} rows={3} aria-label={`Message paragraph ${index + 1}`} />
          ))}
        </Section>

        <Section title="Closing Call to Action" description="Final homepage image, message, and action buttons.">
          <Input name="closingTitle" defaultValue={content.closing.title} aria-label="Closing heading" />
          <Textarea name="closingDescription" defaultValue={content.closing.description} rows={3} aria-label="Closing description" />
          <MediaUploadField id="closingImage" name="closingImage" defaultValue={content.closing.image} enabled={uploadEnabled} galleryImages={galleryImages} />
          <div className="grid gap-4 sm:grid-cols-2">
            <Input name="closingPrimaryLabel" defaultValue={content.closing.primaryButton.label} aria-label="Primary button text" />
            <Input name="closingPrimaryHref" defaultValue={content.closing.primaryButton.href} aria-label="Primary button link" />
            <Input name="closingSecondaryLabel" defaultValue={content.closing.secondaryButton.label} aria-label="Secondary button text" />
            <Input name="closingSecondaryHref" defaultValue={content.closing.secondaryButton.href} aria-label="Secondary button link" />
          </div>
        </Section>

        <Section title="Partner Logos" description="Logos displayed near the bottom of the homepage. Leave a logo URL empty to hide that logo slot.">
          <input type="hidden" name="partnerLogoCount" value={content.partnerLogos.length} />
          <div className="grid gap-4 lg:grid-cols-2">
            {content.partnerLogos.map((logo, index) => (
              <div key={index} className="space-y-3 rounded-lg border border-gray-200 p-4">
                <div className="space-y-2">
                  <Label htmlFor={`partnerLogoName_${index}`}>Logo {index + 1} name</Label>
                  <Input
                    id={`partnerLogoName_${index}`}
                    name={`partnerLogoName_${index}`}
                    defaultValue={logo.name}
                    placeholder="Partner name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor={`partnerLogoSrc_${index}`}>Logo {index + 1} image</Label>
                  <MediaUploadField
                    id={`partnerLogoSrc_${index}`}
                    name={`partnerLogoSrc_${index}`}
                    defaultValue={logo.src}
                    enabled={uploadEnabled}
                    galleryImages={galleryImages}
                    placeholder="Upload a logo or enter its URL"
                  />
                </div>
              </div>
            ))}
          </div>
        </Section>

        <div className="sticky bottom-4 flex justify-end rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <Button type="submit">Save homepage changes</Button>
        </div>
      </form>

      <form action={updateSubmenuPagesAction} className="space-y-6">
        <Section
          title="Submenu Pages"
          description="Update the pages opened from the header dropdown menus. Use each group to edit page headings, hero images, overview content, sections, cards, and CTA links."
        >
          <input
            type="hidden"
            name="submenuPageCount"
            value={submenuEntries.length}
          />
          <div className="space-y-4">
            {Object.entries(submenuGroups).map(([group, entries]) => (
              <details
                key={group}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4"
              >
                <summary className="cursor-pointer text-sm font-semibold text-[#17191f]">
                  {group} ({entries.length})
                </summary>
                <div className="mt-4 space-y-4">
                  {entries.map(([slug, page]) => {
                    const pageIndex = submenuEntries.findIndex(
                      ([entrySlug]) => entrySlug === slug
                    );

                    return (
                      <details
                        key={slug}
                        className="rounded-xl border border-gray-200 bg-white p-4"
                      >
                        <summary className="cursor-pointer text-sm font-semibold text-[#17191f]">
                          {page.title}{" "}
                          <span className="font-normal text-muted-foreground">
                            /{slug}
                          </span>
                        </summary>
                        <div className="mt-5 space-y-5">
                          <input
                            type="hidden"
                            name={`submenuSlug_${pageIndex}`}
                            value={slug}
                          />
                          <div className="grid gap-4 lg:grid-cols-3">
                            <div className="space-y-2">
                              <Label htmlFor={`submenuEyebrow_${pageIndex}`}>
                                Menu group
                              </Label>
                              <Input
                                id={`submenuEyebrow_${pageIndex}`}
                                name={`submenuEyebrow_${pageIndex}`}
                                defaultValue={page.eyebrow}
                              />
                            </div>
                            <div className="space-y-2 lg:col-span-2">
                              <Label htmlFor={`submenuTitle_${pageIndex}`}>
                                Page title
                              </Label>
                              <Input
                                id={`submenuTitle_${pageIndex}`}
                                name={`submenuTitle_${pageIndex}`}
                                defaultValue={page.title}
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor={`submenuDescription_${pageIndex}`}
                            >
                              Hero description
                            </Label>
                            <Textarea
                              id={`submenuDescription_${pageIndex}`}
                              name={`submenuDescription_${pageIndex}`}
                              defaultValue={page.description}
                              rows={4}
                              required
                            />
                          </div>

                          <div className="grid gap-4 lg:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor={`submenuImage_${pageIndex}`}>
                                Hero image
                              </Label>
                              <MediaUploadField
                                id={`submenuImage_${pageIndex}`}
                                name={`submenuImage_${pageIndex}`}
                                defaultValue={page.image}
                                enabled={uploadEnabled}
                                galleryImages={galleryImages}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`submenuImageAlt_${pageIndex}`}>
                                Image alt text
                              </Label>
                              <Input
                                id={`submenuImageAlt_${pageIndex}`}
                                name={`submenuImageAlt_${pageIndex}`}
                                defaultValue={page.imageAlt}
                              />
                            </div>
                          </div>

                          <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                            <h3 className="mb-3 text-sm font-semibold text-[#17191f]">
                              Page video
                            </h3>
                            <div className="grid gap-4 lg:grid-cols-2">
                              <div className="space-y-2">
                                <Label htmlFor={`submenuVideoTitle_${pageIndex}`}>
                                  Video title
                                </Label>
                                <Input
                                  id={`submenuVideoTitle_${pageIndex}`}
                                  name={`submenuVideoTitle_${pageIndex}`}
                                  defaultValue={page.videos?.[0]?.title}
                                  placeholder={`${page.title} Video`}
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`submenuVideoHref_${pageIndex}`}>
                                  Video URL
                                </Label>
                                <Input
                                  id={`submenuVideoHref_${pageIndex}`}
                                  name={`submenuVideoHref_${pageIndex}`}
                                  defaultValue={page.videos?.[0]?.href}
                                  placeholder="YouTube, Vimeo, or MP4 URL"
                                />
                              </div>
                            </div>
                            <div className="mt-4 grid gap-4 lg:grid-cols-2">
                              <div className="space-y-2">
                                <Label
                                  htmlFor={`submenuVideoDescription_${pageIndex}`}
                                >
                                  Video description
                                </Label>
                                <Textarea
                                  id={`submenuVideoDescription_${pageIndex}`}
                                  name={`submenuVideoDescription_${pageIndex}`}
                                  defaultValue={page.videos?.[0]?.description}
                                  rows={3}
                                  placeholder="Short summary shown beside or below the video."
                                />
                              </div>
                              <div className="space-y-2">
                                <Label
                                  htmlFor={`submenuVideoThumbnail_${pageIndex}`}
                                >
                                  Video thumbnail
                                </Label>
                                <MediaUploadField
                                  id={`submenuVideoThumbnail_${pageIndex}`}
                                  name={`submenuVideoThumbnail_${pageIndex}`}
                                  defaultValue={page.videos?.[0]?.thumbnail}
                                  enabled={uploadEnabled}
                                  galleryImages={galleryImages}
                                  placeholder="Optional thumbnail image"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="grid gap-4 lg:grid-cols-2">
                            <div className="space-y-2">
                              <Label
                                htmlFor={`submenuOverviewKicker_${pageIndex}`}
                              >
                                Overview label
                              </Label>
                              <Input
                                id={`submenuOverviewKicker_${pageIndex}`}
                                name={`submenuOverviewKicker_${pageIndex}`}
                                defaultValue={page.overviewKicker}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor={`submenuOverviewTitle_${pageIndex}`}
                              >
                                Overview headline
                              </Label>
                              <Input
                                id={`submenuOverviewTitle_${pageIndex}`}
                                name={`submenuOverviewTitle_${pageIndex}`}
                                defaultValue={page.overviewTitle}
                              />
                            </div>
                          </div>

                          <div>
                            <input
                              type="hidden"
                              name={`submenuSectionCount_${pageIndex}`}
                              value={page.sections.length}
                            />
                            <h3 className="mb-3 text-sm font-semibold text-[#17191f]">
                              Content sections
                            </h3>
                            <div className="grid gap-4 lg:grid-cols-3">
                              {page.sections.map((section, sectionIndex) => (
                                <div
                                  key={`${slug}-section-${sectionIndex}`}
                                  className="space-y-3 rounded-lg bg-gray-50 p-4"
                                >
                                  <Input
                                    name={`submenuSectionTitle_${pageIndex}_${sectionIndex}`}
                                    defaultValue={section.title}
                                    aria-label={`${page.title} section ${sectionIndex + 1} title`}
                                  />
                                  <Textarea
                                    name={`submenuSectionBody_${pageIndex}_${sectionIndex}`}
                                    defaultValue={section.body}
                                    rows={5}
                                    aria-label={`${page.title} section ${sectionIndex + 1} body`}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-4 lg:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor={`submenuCardsTitle_${pageIndex}`}>
                                Cards section title
                              </Label>
                              <Input
                                id={`submenuCardsTitle_${pageIndex}`}
                                name={`submenuCardsTitle_${pageIndex}`}
                                defaultValue={page.cardsTitle}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor={`submenuCardsDescription_${pageIndex}`}
                              >
                                Cards section description
                              </Label>
                              <Textarea
                                id={`submenuCardsDescription_${pageIndex}`}
                                name={`submenuCardsDescription_${pageIndex}`}
                                defaultValue={page.cardsDescription}
                                rows={3}
                              />
                            </div>
                          </div>

                          <div>
                            <input
                              type="hidden"
                              name={`submenuCardCount_${pageIndex}`}
                              value={page.cards.length}
                            />
                            <h3 className="mb-3 text-sm font-semibold text-[#17191f]">
                              Cards
                            </h3>
                            <div className="grid gap-4 lg:grid-cols-3">
                              {page.cards.map((card, cardIndex) => (
                                <div
                                  key={`${slug}-card-${cardIndex}`}
                                  className="space-y-3 rounded-lg bg-gray-50 p-4"
                                >
                                  <Input
                                    name={`submenuCardTitle_${pageIndex}_${cardIndex}`}
                                    defaultValue={card.title}
                                    aria-label={`${page.title} card ${cardIndex + 1} title`}
                                  />
                                  <Textarea
                                    name={`submenuCardDescription_${pageIndex}_${cardIndex}`}
                                    defaultValue={card.description}
                                    rows={4}
                                    aria-label={`${page.title} card ${cardIndex + 1} description`}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="grid gap-4 lg:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor={`submenuCtaLabel_${pageIndex}`}>
                                CTA label
                              </Label>
                              <Input
                                id={`submenuCtaLabel_${pageIndex}`}
                                name={`submenuCtaLabel_${pageIndex}`}
                                defaultValue={page.ctaLabel}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor={`submenuCtaHref_${pageIndex}`}>
                                CTA link
                              </Label>
                              <Input
                                id={`submenuCtaHref_${pageIndex}`}
                                name={`submenuCtaHref_${pageIndex}`}
                                defaultValue={page.ctaHref}
                              />
                            </div>
                          </div>
                        </div>
                      </details>
                    );
                  })}
                </div>
              </details>
            ))}
          </div>
        </Section>

        <div className="sticky bottom-4 flex justify-end rounded-xl border border-gray-200 bg-white/95 p-4 shadow-lg backdrop-blur">
          <Button type="submit">Save submenu page changes</Button>
        </div>
      </form>
    </div>
  );
}
