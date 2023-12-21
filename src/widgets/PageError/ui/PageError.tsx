import { useLocation, useNavigate } from "react-router-dom";
import { NavigateFunction } from "react-router";
import { Button } from "shared/ui/Button/Button";
import cls from "./PageError.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { useEffect } from "react";

interface PageErrorProps {
  className?: string;
  error: Error | null;
}

export const PageError = ({ className, error }: PageErrorProps) => {
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
  }, []);

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
};
