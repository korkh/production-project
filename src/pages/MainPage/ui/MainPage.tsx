import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

interface ErrorProps {
  errorInfo?: Error | null;
}

const MainPage = ({ errorInfo }: ErrorProps) => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton errorInfo={errorInfo} />
      {t("Main pagе")}
      <br />
      <Counter />
    </div>
  );
};

export default MainPage;
