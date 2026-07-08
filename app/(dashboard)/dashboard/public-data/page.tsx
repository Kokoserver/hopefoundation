import { getGalleryImages, getHomepageContent } from "@/db/queries";
import { isMediaUploadEnabled } from "@/lib/media";
import { MediaUploadField } from "@/components/dashboard/media-upload-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updatePublicDataAction } from "./actions";

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
  const uploadEnabled = isMediaUploadEnabled();
  const galleryImages = await getGalleryImages();

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
    </div>
  );
}
