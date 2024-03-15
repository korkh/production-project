import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";

import cls from "./ForbiddenPage.module.scss";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation("translation");

  return (
    <Page
      data-testid="ForbiddenPage"
      className={classNames(cls.forbiddenPage, [className], {})}
    >
      {t("You have no access to the following source")}!
    </Page>
  );
};

export default ForbiddenPage;
