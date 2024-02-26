import { ArticleListItemSkeleton } from "../../ui/ArticleListItem/ArticleListItemSkeleton";
import {
  HTMLAttributeAnchorTarget,
  memo,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { List, ListRowProps, WindowScroller } from "react-virtualized";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize } from "shared/ui/Text/Text";
import { PAGE_ID } from "widgets/Page/Page";
import { Article, ArticleView } from "../../model/types/article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import cls from "./ArticleList.module.scss";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
  view?: ArticleView;
}

export const ArticleList = memo(function ArticleList(props: ArticleListProps) {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading,
    target,
  } = props;

  const { t } = useTranslation("article");
  const listRef = useRef<HTMLDivElement>(null);

  const isBig = view === ArticleView.BIG;

  const { innerWidth } = window;

  const [columnsCount, setColumnsCount] = useState<number>(() =>
    calculateColumnsCount(innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setColumnsCount(calculateColumnsCount(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function calculateColumnsCount(width: number): number {
    if (width >= 1200) return 4;
    if (width >= 992) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 4)
      .fill(0)
      .map((_, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
      ));

  const rowCount = Math.ceil(articles.length / columnsCount);

  const rowRender = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * columnsCount;
    const toIndex = Math.min(fromIndex + columnsCount, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          target={target}
          key={`str${i}`}
          className={cls.card}
        />
      );
    }

    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    );
  };

  useLayoutEffect(() => {
    setColumnsCount(calculateColumnsCount(window.innerWidth));
  }, [innerWidth]);

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]], {})}>
        <Text size={TextSize.L} title={t("Articles not found")} />
      </div>
    );
  }

  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({ height, width, onChildScroll, isScrolling, scrollTop }) => (
        <div
          ref={listRef}
          className={classNames(cls.ArticleList, [className, cls[view]], {})}
        >
          <List
            height={height ?? 700}
            rowCount={rowCount}
            rowHeight={isBig ? 700 : 330}
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            autoHeight
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
