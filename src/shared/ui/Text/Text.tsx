import { memo } from "react";

import { TextTheme, TextAlign, TextSize } from "./consts/TextConsts";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Text.module.scss";


interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: "h3",
  [TextSize.M]: "h2",
  [TextSize.L]: "h1",
};

export const Text = memo(function Text(props: TextProps) {
  const {
    className,
    text,
    title,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    "data-testid": dataTestId = "Text",
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={classNames(cls.Text, [className], mods)}>
      {title && (
        <HeaderTag data-testid={`${dataTestId}.Header`} className={cls.title}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p data-testid={`${dataTestId}.Paragraph`} className={cls.text}>
          {text}
        </p>
      )}
    </div>
  );
});
