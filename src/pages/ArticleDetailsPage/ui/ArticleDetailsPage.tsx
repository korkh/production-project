import { ArticleDetails } from "entities/Article";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(function ArticleDetailsPage(
  props: ArticleDetailsPageProps
) {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(cls.articleDetailsPage, [className], {})}>
        {t("Article not found")}
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleDetailsPage, [className], {})}>
      <ArticleDetails id={id || "1"} />
    </div>
  );
});

export default ArticleDetailsPage;