import { CSSProperties, memo } from "react";

import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Skeleton.module.scss";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export const Skeleton = memo(function Skeleton(props: SkeletonProps) {
  const { className, height, width, border } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(cls.skeleton, [className], {})} style={styles} />
  );
});
