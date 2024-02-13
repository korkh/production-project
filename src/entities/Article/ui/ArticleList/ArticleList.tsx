import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Article, ArticleView } from "../../model/types/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 10 : 4)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const { className, articles, view = ArticleView.SMALL, isLoading } = props;

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={cls.card}
      key={article.id}
    />
  );

  return (
    <div className={classNames(cls.articleList, [className, cls[view]], {})}>
      {articles.length > 0 ? articles.map(renderArticle) : "No articles found"}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
