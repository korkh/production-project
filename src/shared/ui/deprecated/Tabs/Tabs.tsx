import { ReactNode, useCallback } from "react";

import { Card } from "../Card/Card";
import { CardTheme } from "../Card/consts/CardTheme";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Tabs.module.scss";

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];
  value: T;
  onTabClick: (tab: TabItem<T>) => void;
}

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, onTabClick, value } = props;

  const clickHandle = useCallback(
    (tab: TabItem<T>) => () => {
      onTabClick(tab);
    },
    [onTabClick]
  );

  return (
    <div className={classNames(cls.tabs, [className], {})}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
          className={cls.tab}
          key={tab.value}
          onClick={clickHandle(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
