import { classNames } from "shared/lib/classNames/classNames";
import cls from "./NotFoundPage.module.scss";
import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: PropsWithChildren<NotFoundPageProps>) => {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  return (
    <div
      className={classNames(cls.notfoundpage, [className], {})}
      {...otherProps}
    >
      {t("Page not found")}
    </div>
  );
};
