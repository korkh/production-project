import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getCanEditArticle } from "../../model/selectors/article";

import { getArticleDetailsData } from "@/entities/Article";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/deprecatedButton";
import { HStack } from "@/shared/ui/deprecatedStack";
import {
  getRouteArticleDetails,
  getRouteArticles,
} from "@/shared/const/router";

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo(function ArticleDetailsPageHeader(
  props: ArticleDetailsPageHeaderProps
) {
  const { className } = props;
  const { t } = useTranslation("article");
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    if (article && article.id) {
      navigate(`${getRouteArticleDetails(article.id)}/edit`);
    }
  }, [article, navigate]);

  return (
    <HStack max justify="between" className={classNames("", [className], {})}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t("Back to articles")}
      </Button>
      {canEdit && article && article?.id && (
        <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
          {t("Edit")}
        </Button>
      )}
    </HStack>
  );
});
