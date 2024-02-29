import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ForbiddenPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Page } from "widgets/Page/Page";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = memo(function ForbiddenPage(props: ForbiddenPageProps) {
  const { className } = props;
  const { t } = useTranslation("translation");
  return (
    <Page className={classNames(cls.forbiddenPage, [className], {})}>
      {t("You have no access to the following source")}!
    </Page>
  );
});

export default ForbiddenPage;
