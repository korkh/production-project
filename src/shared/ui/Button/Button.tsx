import { classNames, Mods } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes, FC, memo } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
  CLEAR_INVERTED = "clearInverted",
}

export enum ButtonSize {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

// Due to the children in button in our case is a string - we can use memo
// If we are going to use {} in CHILDREN - BAD PRACSIS! Better do not use due to refs to memory
export const Button: FC<ButtonProps> = memo(function Button(props) {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, [className], mods)}
      {...otherProps}
    >
      {children}
    </button>
  );
});
