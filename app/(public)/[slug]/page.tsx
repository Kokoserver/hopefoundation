import { notFound } from "next/navigation";
import { SubmenuArticlePage } from "@/components/common/submenu-article-page";
import { submenuPages, submenuSlugs } from "@/lib/submenu-pages";

export function generateStaticParams() {
  return submenuSlugs.map((slug) => ({ slug }));
}

export default async function SubmenuPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = submenuPages[slug];

  if (!page) {
    notFound();
  }

  const relatedLinks = Object.entries(submenuPages)
    .filter(([relatedSlug, relatedPage]) => {
      return relatedSlug !== slug && relatedPage.eyebrow === page.eyebrow;
    })
    .slice(0, 6)
    .map(([relatedSlug, relatedPage]) => ({
      title: relatedPage.title,
      eyebrow: relatedPage.eyebrow,
      href: `/${relatedSlug}`,
    }));

  return <SubmenuArticlePage page={page} relatedLinks={relatedLinks} />;
}
