import { useCallback, useEffect, useState } from "react";

export const useScrollToTop = (scrollThreshold = 100) => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = useCallback(() => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		setIsVisible(scrollTop > scrollThreshold);
	}, [scrollThreshold]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return { isVisible, scrollToTop };
};
