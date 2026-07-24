import { PublicPage } from "@/components/common/public-page";
import { publicPages } from "@/lib/public-pages";

export default function EventsPage() {
  return <PublicPage page={publicPages.events} />;
}
