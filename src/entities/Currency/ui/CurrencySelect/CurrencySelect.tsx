import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = (Object.keys(Currency) as Array<keyof typeof Currency>).map(
  (key) => ({
    value: Currency[key],
    content: Currency[key],
  })
);

export const CurrencySelect = memo(function CurrencySelect({
  className,
  value,
  onChange,
  readonly,
}: CurrencySelectProps) {
  const { t } = useTranslation(["profile"]);

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", [className], {})}
      label={t("Choose currency")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
