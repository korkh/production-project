import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavigateFunction } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button/Button";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
  error?: Error | null;
}

export const PageError = memo(function PageError({
  className,
  error,
}: PageErrorProps) {
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { t } = useTranslation();

  const handleBack = () => {
    navigate(from, { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    if (error != null || undefined) {
      console.log("Error", error);
    }
  }, [error]);

  return (
    <div role="alert" className={classNames(cls.pageerror, [className], {})}>
      <h3>{t("Oops.. Something went wrong")}</h3>
      {error && (
        <>
          <h6>{error.name}</h6>
          <p>{error.message}</p>
        </>
      )}
      <Button className={cls.btnBack} onClick={handleBack}>
        {t("Refresh page")}
      </Button>
    </div>
  );
});
