import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticlesPage.module.scss";
import { useTranslation } from "react-i18next";
import { memo } from "react";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = memo(function ArticlesPage(props: ArticlesPageProps) {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.articlesPage, [className], {})}>
      {t("Articles Page")}
    </div>
  );
});

export default ArticlesPage;
