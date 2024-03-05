import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./PageFilters.module.scss";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import {
  ArticleSortSelector,
  ArticleView,
  ArticleViewSelector,
  ArticleSortField,
  ArticleType
} from "@/entities/Article";
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from "@/pages/ArticlesPage/model/selectors/articlePageSelectors";
import { fetchArticlesList } from "@/pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList";
import { articlesPageActions } from "@/pages/ArticlesPage/model/slices/articlesPageSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { SortOrder } from "@/shared/types";
import { Card } from "@/shared/ui/Card/Card";
import { Input } from "@/shared/ui/Input/Input";
import { ArticleTypeTabs } from "@/entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";

interface PageFiltersProps {
  className?: string;
}

const PageFilters = memo(function PageFilters(props: PageFiltersProps) {
  const { className } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    // replace: true - new portion of data (in articlesPageSlice used setAll(), if false - addMany())
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1)); //need to set back to 1st page after filter's change
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  const onChangeSearch = useCallback(
    (search: string) => {
      dispatch(articlesPageActions.setSearch(search));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData]
  );

  return (
    <div className={classNames(cls.pageFilters, [className], {})}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          onChange={onChangeSearch}
          value={search}
          placeholder={t("Search")}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  );
});

export default PageFilters;
