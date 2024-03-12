import { HTMLAttributeAnchorTarget, memo } from "react";
import { useTranslation } from "react-i18next";

import { ArticleView } from "../../model/consts/consts";
import { Article } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextSize } from "@/shared/ui/Text";

import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation("article");

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
        <Text size={TextSize.L} title={t("Articles not found")} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
