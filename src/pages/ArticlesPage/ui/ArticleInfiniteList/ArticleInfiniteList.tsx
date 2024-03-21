import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPageError,
} from "../../model/selectors/articlesPageSelectors";
import { getArticles } from "../../model/slices/articlesPageSlice";

import { ArticleList } from "@/entities/Article";
import { Text } from "@/shared/ui/Text";

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

  const [articlesLoaded, setArticlesLoaded] = useState(false); // State to track if articles are loaded

  // Effect to run when articles are loaded
  useEffect(() => {
    if (articles) {
      setArticlesLoaded(true);
    }
  }, [articles]);

  if (error || !articlesLoaded) {
    return <Text text={t("Articles loading error")} />;
  }

  return (
    <ArticleList
      data-testid="ArticleList"
      isLoading={isLoading}
      view={view}
      articles={articles}
      className={className}
    />
  );
});
