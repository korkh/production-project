import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { useTranslation } from "react-i18next";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "en" ? "no" : "en");
  };

  return (
    <Button
      className={classNames("", [className], {})}
      theme={ButtonTheme.CLEAR}
      onClick={toggle}
    >
      {t(short ? "Short language" : "Long language")}
    </Button>
  );
}
