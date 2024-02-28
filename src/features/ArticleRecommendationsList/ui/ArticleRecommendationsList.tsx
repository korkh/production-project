import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { Text, TextSize } from "shared/ui/Text/Text";
import { ArticleList } from "entities/Article";
import { VStack } from "shared/ui/Stack";
import { useArticleRecommendationsList } from "../api/articleRecommendationsApi";

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
    } = useArticleRecommendationsList(3); // 3 i s _limit for upload only 3 articles as recommendations

    if (isLoading || error) {
      return null;
    }

    return (
      <VStack gap="8" className={classNames("", [className], {})}>
        <Text size={TextSize.L} title={t("Recommended")} />
        <ArticleList articles={articles} target="_blank" />
      </VStack>
    );
  }
);