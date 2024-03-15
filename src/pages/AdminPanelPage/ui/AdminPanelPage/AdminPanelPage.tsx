import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Page } from "@/widgets/Page";

import cls from "./AdminPanelPage.module.scss";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = (props: AdminPanelPageProps) => {
  const { className } = props;
  const { t } = useTranslation("admin");

  return (
    <Page
      data-testid="AdminPanelPage"
      className={classNames(cls.adminPanelPage, [className], {})}
    >
      {t("Admin Page")}
    </Page>
  );
};

export default AdminPanelPage;
