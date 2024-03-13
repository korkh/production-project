import { memo } from "react";


import ListIcon from "@/shared/assets/icons/list-24-24.svg";
import TiledIcon from "@/shared/assets/icons/tiled-24-24.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icon";

import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "@/entities/Article";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo(function ArticleViewSelector(
  props: ArticleViewSelectorProps
) {
  const { className, view, onViewClick } = props;

  //example of function closure
  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, [className], {})}>
      {viewTypes.map((viewType, index) => (
        <Button
          theme={ButtonTheme.CLEAR}
          key={index}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", [], {
              [cls.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
});