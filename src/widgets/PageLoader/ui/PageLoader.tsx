import { PropsWithChildren } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/Loader";

import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export function PageLoader(props: PropsWithChildren<PageLoaderProps>) {
  const { className, ...otherProps } = props;
  return (
    <div
      className={classNames(cls.pageloader, [className], {})}
      {...otherProps}
    >
      <Loader />
    </div>
  );
}
