import { useTranslation } from "react-i18next";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
	Button as ButtonDeprecated,
	ButtonTheme,
} from "@/shared/ui/deprecated/Button";
import { ToggleFeatures } from "@/shared/lib/features";
import { Button } from "@/shared/ui/redesigned/Button";

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export function LangSwitcher({ className, short }: LangSwitcherProps) {
	const { t, i18n } = useTranslation();

	const toggle = async () => {
		i18n.changeLanguage(i18n.language === "en" ? "no" : "en");
	};

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			on={
				<Button variant="clear">
					{t(short ? "Short language" : "Language")}
				</Button>
			}
			off={
				<ButtonDeprecated
					className={classNames("", [className], {})}
					theme={ButtonTheme.CLEAR}
					onClick={toggle}
				>
					{t(short ? "Short language" : "Language")}
				</ButtonDeprecated>
			}
		/>
	);
}
