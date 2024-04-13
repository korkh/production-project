import { CSSProperties, forwardRef, useMemo } from "react";

import { classNames, Mods } from "@/shared/lib/classNames/classNames";

import cls from "./Avatar.module.scss";
import { AppImage } from "../AppImage";
import UserIcon from "../../../assets/icons/user-filled.svg";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
const Avatar = forwardRef<HTMLImageElement, AvatarProps>(function Avatar(
  { className, src, size = 100, alt = "avatar", fallbackInverted }: AvatarProps,
  ref
) {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallBack = <Skeleton width={size} height={size} border={"50%"} />;
  const errorFallback = (
    <Icon
      inverted={fallbackInverted}
      width={size}
      height={size}
      Svg={UserIcon}
    />
  );

  return (
    <AppImage
      ref={ref}
      src={src}
      alt={alt}
      style={styles}
      fallback={fallBack}
      errorFallback={errorFallback}
      className={classNames(cls.avatar, [className], mods)}
    />
  );
});

export { Avatar };
