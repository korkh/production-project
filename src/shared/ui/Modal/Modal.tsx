import { useTheme } from "app/providers/ThemeProvider";
import { useCallback, useEffect, useRef, useState } from "react";
import { PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: PropsWithChildren<ModalProps>) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const [isMounted, setIsMounted] = useState(false); // controls mounting in DOM tree
  const [isClosing, setIsClosing] = useState(false);

  // timerRef holds our timer to close Modal
  // by ReturnType we can extract type from setTimeout
  // if we are not using useRef() it can arise error if by
  // some reason Modal will be removed from DOM tree
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const { theme } = useTheme(); //false decision and futher will be changed

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  // Новые ссылки!!!
  // Close Modal by pressing "Esc"
  // for each re-render following functions creating again and each
  // function have new Memory Link to avoid this and save Links to functions we can use useCallback() for memoization of functions
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler]
  );

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation(); //it will prevent to close modal by clicking on content part
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    // cleaning timers, async operations and events should be cleaned after component dismounts
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  // Modal not rendering if flag Lazy and not mounted
  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(cls.modal, [className, theme, "app_modal"], mods)}
      >
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
