import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.button, [className, cls[theme]], {})}
      {...otherProps}
    >
      {children}
    </button>
  );
};
