import { PropsWithChildren } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: PropsWithChildren<LoaderProps>) => {
  const { className, ...otherProps } = props;
  return (
    <div className={classNames(cls.lds, [className], {})} {...otherProps}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};