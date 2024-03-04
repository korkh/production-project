import { useTheme } from "app/providers/ThemeProvider";
import {
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";
import cls from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export function Modal(props: PropsWithChildren<ModalProps>) {
  const { className, children, isOpen, onClose, lazy } = props;
  const [isMounted, setIsMounted] = useState(false); // controls mounting in DOM tree
  const [isClosing, setIsClosing] = useState(false);

  // timerRef holds our timer to close Modal
  // by ReturnType we can extract type from setTimeout
  // if we are not using useRef() it can arise error if by
  // some reason Modal will be removed from DOM tree
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const { theme } = useTheme(); // false decision and futher will be changed

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

  const mods: Mods = {
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
        <Overlay onClick={closeHandler} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
}
