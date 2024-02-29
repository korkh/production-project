import { classNames } from "shared/lib/classNames/classNames";
import cls from "./AdminPanelPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Page } from "widgets/Page/Page";

interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo(function AdminPanelPage(
  props: AdminPanelPageProps
) {
  const { className } = props;
  const { t } = useTranslation("admin");
  return (
    <Page className={classNames(cls.adminPanelPage, [className], {})}>
      {t("Admin Page")}
    </Page>
  );
});

export default AdminPanelPage;
