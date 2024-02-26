import { ArticleDetails, ArticleList } from "entities/Article";
import { CommentList } from "entities/Comment";
import { AddCommentForm } from "features/addCommentForm";
import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "shared/ui/Stack";
import { Text, TextSize } from "shared/ui/Text/Text";
import { Page } from "widgets/Page/Page";
import { getArticleCommentsIsLoading } from "../../model/selectors/getComments";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchArticleRecommendations } from "../../model/services/fetchArticlesRecommendations/fetchArticleRecommendations";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId.ts/fetchCommentsByArticleId";
import { articleDetailsPageReducer } from "../../model/slice";
import { getArticleComments } from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleRecommendations } from "../../model/slice/articleDetailsPageRecommendationsSlice";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import cls from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchCommentsByArticleId(id));
      dispatch(fetchArticleRecommendations());
    }
  });

  if (!id) {
    return (
      <Page className={classNames(cls.articleDetailsPage, [className], {})}>
        {t("Articles not found")}
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, [className], {})}>
        <VStack gap="16" max>
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <Text
            size={TextSize.L}
            className={cls.commentTitle}
            title={t("Recommended")}
          />
          <ArticleList
            articles={recommendations}
            isLoading={recommendationsIsLoading}
            className={cls.recommendations}
            target="_blank"
          />
          <Text
            size={TextSize.L}
            className={cls.commentTitle}
            title={t("Comments")}
          />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
