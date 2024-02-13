import { memo, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Page } from "shared/ui/Page/Page";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(function NotFoundPage(
  props: PropsWithChildren<NotFoundPageProps>
) {
  const { className, ...otherProps } = props;
  const { t } = useTranslation();
  return (
    <Page
      className={classNames(cls.notfoundpage, [className], {})}
      {...otherProps}
    >
      {t("Page not found")}
    </Page>
  );
});
