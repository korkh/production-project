import { PropsWithChildren } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export function Loader(props: PropsWithChildren<LoaderProps>) {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.lds, [className], {})} {...otherProps}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
