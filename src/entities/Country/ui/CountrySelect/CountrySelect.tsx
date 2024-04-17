import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popups";
import { ListBox } from "@/shared/ui/redesigned/Popups";
import { Country } from "../../model/types/country";
import { ToggleFeatures } from "@/shared/lib/features";

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

const options = [
	{ value: Country.France, content: Country.France },
	{ value: Country.Kyrgyzstan, content: Country.Kyrgyzstan },
	{ value: Country.Lithuania, content: Country.Lithuania },
	{ value: Country.Norway, content: Country.Norway },
	{ value: Country.Ukraine, content: Country.Ukraine },
	{ value: Country.Poland, content: Country.Poland },
	{ value: Country.Spain, content: Country.Spain },
	{ value: Country.USA, content: Country.USA },
];

export const CountrySelect = memo(function CountrySelect({
	className,
	value,
	onChange,
	readonly,
}: CountrySelectProps) {
	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Country);
		},
		[onChange]
	);

	const props = {
		className,
		value,
		defaultValue: t("Country"),
		label: t("Country"),
		items: options,
		onChange: onChangeHandler,
		readonly,
		direction: "top right" as const,
	};

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			on={<ListBox {...props} />}
			off={<ListBoxDeprecated {...props} />}
		/>
	);
});
