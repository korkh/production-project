import { memo, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./NotFoundPage.module.scss";
import { Page } from "@/widgets/Page";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(function NotFoundPage(
  props: PropsWithChildren<NotFoundPageProps>
) {
  const { className, ...otherProps } = props;
  const { t } = useTranslation("translation");
  return (
    <Page
      data-testid="NotFoundPage"
      className={classNames(cls.notfoundpage, [className], {})}
      {...otherProps}
    >
      {t("Page not found")}
    </Page>
  );
});
