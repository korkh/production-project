import { memo, useState } from "react";

import { Icon } from "../Icon/Icon";

import StarIcon from "@/shared/assets/icons/star.svg";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./StarRating.module.scss";

interface StarRatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export const StarRating = memo(function StarRating(props: StarRatingProps) {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  /**   Due to we are using stars.map((starNumber) to iterate through array of stars so it's impossible without closure to set number of star.
   *    Closure onHover: This function relies on closure to capture the starsCount parameter value when it's created.
   *    This allows each individual star icon to have its own hover behavior based on its respective starsCount.
   * */
  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  //closure
  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div
      className={classNames(cls.StarRating, [className], {})}
      data-testid="StarRating"
    >
      {stars.map((starNumber) => (
        <Icon
          className={classNames(
            cls.starIcon,
            [currentStarsCount >= starNumber ? cls.hovered : cls.normal],
            { [cls.selected]: isSelected }
          )}
          Svg={StarIcon}
          key={starNumber}
          width={size}
          height={size}
          // onTouchStart={onHover(starNumber)}
          // onTouchEnd={onLeave}
          // onFocus={onHover(starNumber)}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(starNumber)}
          onClick={onClick(starNumber)}
          data-testid={`StarRating.${starNumber}`}
          data-selected={currentStarsCount >= starNumber}
        />
      ))}
    </div>
  );
});
