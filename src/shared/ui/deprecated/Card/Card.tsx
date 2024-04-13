import { HTMLAttributes, memo, ReactNode } from "react";

import { CardTheme } from "./consts/CardTheme";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Card.module.scss";


interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}


/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export const Card = memo(function Card(props: CardProps) {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props;

  return (
    <div
      className={classNames(cls.Card, [className, cls[theme]], {
        [cls.max]: max,
      })}
      {...otherProps}
    >
      {children}
    </div>
  );
});
