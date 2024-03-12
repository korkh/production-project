
import { memo, PropsWithChildren, ReactNode } from "react";

import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import GreenIcon from "@/shared/assets/icons/theme-green.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { Theme } from "@/shared/const/Theme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button, ButtonTheme } from "@/shared/ui/Button";

interface ThemeSwitcherProps {
  className?: string;
}

interface IconType {
  [Theme.ORANGE]: ReactNode;
  [Theme.DARK]: ReactNode;
  [Theme.LIGHT]: ReactNode;
}

export const iconType: IconType = {
  [Theme.ORANGE]: <GreenIcon />,
  [Theme.DARK]: <DarkIcon />,
  [Theme.LIGHT]: <LightIcon />,
};

export const ThemeSwitcher = memo(function ThemeSwitcher(
  props: PropsWithChildren<ThemeSwitcherProps>
) {
  const { className, ...otherProps } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", [className], {})}
      onClick={toggleTheme}
      {...otherProps}
    >
      {iconType[theme]}
    </Button>
  );
});
