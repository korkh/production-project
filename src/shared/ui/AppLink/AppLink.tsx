import { forwardRef } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss";
import { AppLinkTheme } from "./consts/AppLinkTheme";

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

const AppLink = forwardRef<HTMLAnchorElement, AppLinkProps>(function AppLink(
  props,
  ref
) {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      ref={ref}
      to={to}
      className={classNames(cls.appLink, [className, cls[theme]], {})}
      {...otherProps}
    >
      {children}
    </Link>
  );
});

export { AppLink };
