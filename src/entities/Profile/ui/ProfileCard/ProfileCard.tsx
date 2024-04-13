import { useTranslation } from "react-i18next";

import { Profile } from "../../model/types/profile";

import { Country, CountrySelect } from "@/entities/Country";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/deprecated/Avatar";
import { Input } from "@/shared/ui/deprecated/Input";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { HStack, VStack } from "@/shared/ui/deprecated/Stack";
import { Text, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text";

import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,
  } = props;
  const { t } = useTranslation(["profile"]);

  if (isLoading) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.ProfileCard, [className], {
          [cls.loading]: true,
        })}
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        justify="center"
        max
        className={classNames(cls.profileCard, [className, cls.error], {})}
      >
        <Text
          theme={TextTheme.ERROR}
          title={t("Profile loading error")}
          text={t("Try to refresh your page")}
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.profileCard, [className], mods)}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <Avatar src={data?.avatar} size={200} />
        </HStack>
      )}
      <Input
        value={data?.firstName}
        placeholder={t("Your name")}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstName"
      />
      <Input
        value={data?.lastName}
        placeholder={t("Your lastname")}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastName"
      />
      <Input
        value={data?.age}
        placeholder={t("Your age")}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
        data-testid="ProfileCard.age"
      />
      <Input
        value={data?.city}
        placeholder={t("City")}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
        data-testid="ProfileCard.city"
      />
      <Input
        value={data?.username}
        placeholder={t("Enter username")}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
        data-testid="ProfileCard.username"
      />
      <Input
        value={data?.avatar}
        placeholder={t("Enter link to your avatar")}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
        data-testid="ProfileCard.avatar"
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
        data-testid="ProfileCard.CurrencySelect"
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
        data-testid="ProfileCard.CountrySelect"
      />
    </VStack>
  );
}
