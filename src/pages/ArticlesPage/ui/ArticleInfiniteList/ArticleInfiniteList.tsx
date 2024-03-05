import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";
import { ArticleList } from "@/entities/Article";
import { Text } from "@/shared/ui/Text/Text";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageError,
} from "../../model/selectors/articlePageSelectors";

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo(function ArticleInfiniteList(
  props: ArticleInfiniteListProps
) {
  const { className } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  const { t } = useTranslation("article");

  if (error) {
    return <Text text={t("Articles loading error")} />;
  }

  return (
    <ArticleList
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
});
