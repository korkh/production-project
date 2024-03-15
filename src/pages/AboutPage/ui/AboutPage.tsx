import { Page } from "@/widgets/Page";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation("translation");

  return <Page data-testid="AboutPage">{t("About")}</Page>;
}

export default AboutPage;
