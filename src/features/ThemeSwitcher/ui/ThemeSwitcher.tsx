import { memo, PropsWithChildren, ReactNode, useCallback } from "react";

import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import GreenIcon from "@/shared/assets/icons/theme-green.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { Theme } from "@/shared/const/Theme";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { saveJsonSettings } from "@/entities/User";

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

  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [dispatch, toggleTheme]);

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames("", [className], {})}
      onClick={onToggleHandler}
      {...otherProps}
    >
      {iconType[theme]}
    </Button>
  );
});
