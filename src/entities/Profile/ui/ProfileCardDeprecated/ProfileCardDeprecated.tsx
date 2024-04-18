import { memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames, Mods } from "@/shared/lib/classNames/classNames";
import cls from "./ProfileCardDeprecated.module.scss";

import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { CurrencySelect } from "@/entities/Currency";
import { CountrySelect } from "@/entities/Country";
import { Loader } from "@/shared/ui/deprecated/Loader";
import {
	Text as TextDeprecated,
	TextAlign,
	TextTheme,
} from "@/shared/ui/deprecated/Text";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";

export const ProfileCardDeprecatedError = () => {
	const { t } = useTranslation();

	return (
		<HStack
			justify="center"
			max
			className={classNames(cls.ProfileCard, [cls.error], {})}
		>
			<TextDeprecated
				theme={TextTheme.ERROR}
				title={t("Server error on saving")}
				text={t("Try to refresh your page")}
				align={TextAlign.CENTER}
			/>
		</HStack>
	);
};

export const ProfileCardDeprecatedLoader = () => {
	return (
		<HStack
			justify="center"
			max
			className={classNames(cls.ProfileCard, [], { [cls.loading]: true })}
		>
			<Loader />
		</HStack>
	);
};

export const ProfileCardDeprecated = memo(function ProfileCardDepricated(
	props: ProfileCardProps
) {
	const {
		className,
		data,
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
	const { t } = useTranslation();

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<VStack
			gap="8"
			max
			className={classNames(cls.ProfileCard, [className], mods)}
		>
			{data?.avatar && (
				<HStack justify="center" max className={cls.avatarWrapper}>
					<AvatarDeprecated src={data?.avatar} />
				</HStack>
			)}
			<InputDeprecated
				value={data?.firstName}
				placeholder={t("Name")}
				className={cls.input}
				onChange={onChangeFirstname}
				readonly={readonly}
				data-testid="ProfileCard.firstName"
			/>
			<InputDeprecated
				value={data?.lastName}
				placeholder={t("Lastname")}
				className={cls.input}
				onChange={onChangeLastname}
				readonly={readonly}
				data-testid="ProfileCard.lastName"
			/>
			<InputDeprecated
				value={data?.age}
				placeholder={t("Age")}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
			/>
			<InputDeprecated
				value={data?.city}
				placeholder={t("City")}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
			/>
			<InputDeprecated
				value={data?.username}
				placeholder={t("Username")}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
			/>
			<InputDeprecated
				value={data?.avatar}
				placeholder={t("Avatar link")}
				className={cls.input}
				onChange={onChangeAvatar}
				readonly={readonly}
			/>
			<CurrencySelect
				className={cls.input}
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				className={cls.input}
				value={data?.country}
				onChange={onChangeCountry}
				readonly={readonly}
			/>
		</VStack>
	);
});
