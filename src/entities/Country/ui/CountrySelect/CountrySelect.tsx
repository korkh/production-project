import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Select } from "shared/ui/Select/Select";
import { memo, useCallback } from "react";
import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = (Object.keys(Country) as Array<keyof typeof Country>).map(
  (key) => ({
    value: Country[key],
    content: Country[key],
  })
);

export const CountrySelect = memo(function CountrySelect({
  className,
  value,
  onChange,
  readonly,
}: CountrySelectProps) {
  const [t] = useTranslation("profile");

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange]
  );

  return (
    <Select
      className={classNames("", [className], {})}
      label={t("Choose country")}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
