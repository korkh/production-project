import { classNames } from "@/shared/lib/classNames/classNames";
import { HTMLAttributes, memo, ReactNode } from "react";
import cls from "./Card.module.scss";

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

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
