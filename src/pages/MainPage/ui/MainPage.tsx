import { BugButton } from "@/app/providers/ErrorBoundary";
import { RatingCard } from "@/entities/Rating";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Page } from "@/widgets/Page/Page";

interface ErrorProps {
  errorInfo?: Error | null;
}

const MainPage = memo(function MainPage({ errorInfo }: ErrorProps) {
  const { t } = useTranslation("translation");

  return (
    <Page>
      {t("Main page")}
      <div>
        <BugButton errorInfo={errorInfo} />
      </div>
      <RatingCard
        title={t("How do you like the article?")}
        feedbackTitle={t("Leave you feedback please")}
        hasFeedback
      />
    </Page>
  );
});

export default MainPage;
