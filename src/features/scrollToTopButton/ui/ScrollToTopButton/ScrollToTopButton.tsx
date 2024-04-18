import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./ScrollToTopButton.module.scss";
import { Icon } from "@/shared/ui/redesigned/Icon";
import CircleIcon from "@/shared/assets/icons/circle-up.svg";
import { useScrollToTop } from "@/shared/lib/hooks/useScrollToTop/useScrollToTop";

interface ScrollToTopButtonProps {
	className?: string;
}

export const ScrollToTopButton = memo(function ScrollToTopButton(
	props: ScrollToTopButtonProps
) {
	const { className } = props;
	const { isVisible, scrollToTop } = useScrollToTop();

	const onCLick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div
			className={classNames(cls.ScrollToTopButton, [className], {
				[cls.visible]: isVisible,
			})}
			onClick={scrollToTop}
		>
			<Icon
				Svg={CircleIcon}
				clickable
				onClick={onCLick}
				width={32}
				height={32}
			/>
		</div>
	);
});
