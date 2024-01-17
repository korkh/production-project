import { BugButton } from "app/providers/ErrorBoundary";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface ErrorProps {
  errorInfo?: Error | null;
}

const MainPage = memo(function MainPage({ errorInfo }: ErrorProps) {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton errorInfo={errorInfo} />
      {t("Main pagе")}
    </div>
  );
});

export default MainPage;
