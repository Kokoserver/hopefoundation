import { PublicPage } from "@/components/common/public-page";
import { publicPages } from "@/lib/public-pages";

export default function GalleryPage() {
  return <PublicPage page={publicPages.gallery} />;
}
