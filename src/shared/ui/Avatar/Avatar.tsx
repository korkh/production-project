import { CSSProperties, forwardRef, useMemo } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  { className, src, size, alt = "avatar" }: AvatarProps,
  ref
) {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      style={styles}
      className={classNames(cls.avatar, [className], mods)}
    />
  );
});

export { Avatar };

