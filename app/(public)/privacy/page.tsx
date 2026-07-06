import { LegalPage } from "@/components/common/legal-page";
import { legalPages } from "@/lib/public-pages";

export default function PrivacyPage() {
  return <LegalPage {...legalPages.privacy} />;
}
