import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Page } from "@/widgets/Page";

const MainPage = memo(function MainPage() {
  const { t } = useTranslation("translation");

  return <Page data-testid="MainPage">{t("Main page")}</Page>;
});

export default MainPage;
