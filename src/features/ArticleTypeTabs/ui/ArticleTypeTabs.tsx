import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ArticleType } from "../../../entities/Article/model/consts/consts";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Tabs, TabItem } from "@/shared/ui/Tabs";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (newType: ArticleType) => void;
}

export const ArticleTypeTabs = memo(function ArticleTypeTabs(
  props: ArticleTypeTabsProps
) {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation("article");

  const typeTabs = useMemo<TabItem<ArticleType>[]>(
    () => [
      {
        value: ArticleType.ALL,
        content: t("All"),
      },
      {
        value: ArticleType.IT,
        content: t("IT"),
      },
      {
        value: ArticleType.ECONOMICS,
        content: t("Economics"),
      },
      {
        value: ArticleType.SCIENCE,
        content: t("Science"),
      },
    ],
    [t]
  );

  const onTabClick = useCallback(
    (tab: TabItem<ArticleType>) => {
      onChangeType(tab.value);
    },
    [onChangeType]
  );
  return (
    <Tabs<ArticleType>
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames("", [className], {})}
    />
  );
});