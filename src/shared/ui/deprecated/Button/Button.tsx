import { ButtonHTMLAttributes, memo, ReactNode } from "react";

import { ButtonSize } from "./consts/ButtonSize";
import { ButtonTheme } from "./consts/ButtonTheme";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
  fullWidth?: boolean;
}

export const Button = memo(function Button(props: ButtonProps) {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    fullWidth,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, [className], mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
