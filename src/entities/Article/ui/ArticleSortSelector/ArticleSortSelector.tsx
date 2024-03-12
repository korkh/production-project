import { ArticleSortField } from "../../model/consts/consts";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { SortOrder } from "@/shared/types";
import { Select, SelectOption } from "@/shared/ui/Select";
import cls from "./ArticleSortSelector.module.scss";

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(function ArticleSortSelector(
  props: ArticleSortSelectorProps
) {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation("article");

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: "asc",
        content: t("ascending"),
      },
      {
        value: "desc",
        content: t("descending"),
      },
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t("created on"),
      },
      {
        value: ArticleSortField.TITLE,
        content: t("title"),
      },
      {
        value: ArticleSortField.VIEWS,
        content: t("views"),
      },
    ],
    [t]
  );

  return (
    <div className={classNames(cls.articleSortSelector, [className], {})}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t("Sort by")}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        options={orderOptions}
        label={t("by")}
        value={order}
        onChange={onChangeOrder}
        className={cls.order}
      />
    </div>
  );
});
