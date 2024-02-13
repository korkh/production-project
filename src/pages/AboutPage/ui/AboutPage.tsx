import { useTranslation } from "react-i18next";
import { Page } from "shared/ui/Page/Page";

function AboutPage() {
  const { t } = useTranslation();

  return <Page>{t("About")}</Page>;
}

export default AboutPage;
