import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ListBox } from "@/shared/ui/Popups/ui/ListBox/ListBox";
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
    <ListBox
      className={classNames("", [className], {})}
      label={t("Choose country")}
      defaultValue={t("Choose country")}
      value={value}
      items={options}
      onChange={onChangeHandler}
      readonly={readonly}
      direction="top right"
    />
  );
});
