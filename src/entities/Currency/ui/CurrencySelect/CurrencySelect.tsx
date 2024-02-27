import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { ListBox } from "shared/ui/ListBox/ListBox";
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
    <ListBox
      className={classNames("", [className], {})}
      label={t("Choose currency")}
      defaultValue={t("Choose currency")}
      value={value}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
