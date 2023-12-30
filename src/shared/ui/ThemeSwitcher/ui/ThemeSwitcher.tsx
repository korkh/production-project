import { Theme, useTheme } from "app/providers/ThemeProvider";
import { PropsWithChildren } from "react";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import LightIcon from "shared/assets/icons/theme-light.svg";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: PropsWithChildren<ThemeSwitcherProps>) => {
  const { className, ...otherProps } = props;
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", [className], {})}
      onClick={toggleTheme}
      {...otherProps}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
