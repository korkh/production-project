import { Page } from "@/widgets/Page";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const MainPage = memo(function MainPage() {
  const { t } = useTranslation("translation");

  return <Page>{t("Main page")}</Page>;
});

export default MainPage;
