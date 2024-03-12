import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/Button";
import { PageError } from "@/widgets/PageError";

interface ErrorProps {
  errorInfo: Error | null | undefined;
}
// Компонент для тестирования ErrorBoundary
export function BugButton({ errorInfo }: ErrorProps) {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => setError(true);

  return error ? (
    <PageError error={errorInfo} />
  ) : (
    <Button onClick={onThrow}>{t("Throw error")}</Button>
  );
}
