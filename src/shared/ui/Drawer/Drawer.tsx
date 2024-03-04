import { classNames, Mods } from "shared/lib/classNames/classNames";
import React, { memo, ReactNode } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import { Overlay } from "../Overlay/Overlay";
import cls from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo(function Drawer(props: DrawerProps) {
  const { className, children, onClose, isOpen } = props;
  const { theme } = useTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div
        className={classNames(
          cls.Drawer,
          [className, theme, "app_drawer"], //"app_drawer" in index.scss
          mods
        )}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
