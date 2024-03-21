import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";

import { ArticleList } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextSize } from "@/shared/ui/Text";

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  function ArticleRecommendationsList(props: ArticleRecommendationsListProps) {
    const { className } = props;
    const { t } = useTranslation("article");
    const {
      isLoading,
      data: articles,
      error,
    } = useArticleRecommendationsList(3); // 3 is _limit for upload only 3 articles as recommendations

    const [articlesLoaded, setArticlesLoaded] = useState(false); // State to track if articles are loaded

    // Effect to run when articles are loaded
    useEffect(() => {
      if (articles) {
        setArticlesLoaded(true);
      }
    }, [articles]);

    if (isLoading || error || !articles || !articlesLoaded) {
      return null;
    }

    return (
      <VStack
        data-testid="ArticleRecommendationsList"
        gap="8"
        className={classNames("", [className], {})}
      >
        <Text size={TextSize.L} title={t("Recommended")} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    );
  }
);
