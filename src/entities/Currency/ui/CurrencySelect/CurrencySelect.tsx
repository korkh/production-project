import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ListBox as ListBoxDeprecated } from "@/shared/ui/deprecated/Popups";
import { Currency } from "../../model/types/currency";
import { ToggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/redesigned/Popups";

interface CurrencySelectProps {
	className?: string;
	value?: Currency;
	onChange?: (value: Currency) => void;
	readonly?: boolean;
}

const options = [
	{ value: Currency.RUB, content: Currency.RUB },
	{ value: Currency.EUR, content: Currency.EUR },
	{ value: Currency.USD, content: Currency.USD },
	{ value: Currency.NOK, content: Currency.NOK },
	{ value: Currency.SOM, content: Currency.SOM },
	{ value: Currency.TNG, content: Currency.TNG },
];

export const CurrencySelect = memo(function CurrencySelect({
	className,
	value,
	onChange,
	readonly,
}: CurrencySelectProps) {
	const { t } = useTranslation();

	const onChangeHandler = useCallback(
		(value: string) => {
			onChange?.(value as Currency);
		},
		[onChange]
	);

	const props = {
		className,
		value,
		defaultValue: t("Currency"),
		label: t("Currency"),
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
