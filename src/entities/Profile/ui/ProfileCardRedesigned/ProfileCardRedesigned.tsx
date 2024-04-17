import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/shared/ui/redesigned/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Input } from "@/shared/ui/redesigned/Input";
import { CurrencySelect } from "@/entities/Currency";
import { CountrySelect } from "@/entities/Country";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { Text } from "@/shared/ui/redesigned/Text";

export const ProfileCardRedesignedError = () => {
	const { t } = useTranslation();

	return (
		<HStack justify="center" max>
			<Text
				variant="error"
				title={t("Profile loading error")}
				text={t("Try to refresh your page")}
				align="center"
			/>
		</HStack>
	);
};

export const ProfileCardRedesignedSkeleton = () => {
	return (
		<Card padding="24" max>
			<VStack gap="32">
				<HStack max justify="center">
					<Skeleton border="100%" width={128} height={128} />
				</HStack>
				<HStack gap="32" max>
					<VStack gap="16" max>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</VStack>

					<VStack gap="16" max>
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
						<Skeleton width="100%" height={38} />
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
};

export const ProfileCardRedesigned = memo(function ProfileCardRedesigned(
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

	return (
		<Card padding="16" max className={className} border="partial">
			<VStack gap="32">
				{data?.avatar && (
					<HStack justify="center" max>
						<Avatar size={128} src={data?.avatar} />
					</HStack>
				)}
				<HStack gap="24" max>
					<VStack gap="16" max>
						<Input
							value={data?.firstName}
							label={t("Name")}
							onChange={onChangeFirstname}
							readonly={readonly}
							data-testid="ProfileCard.firstname"
						/>
						<Input
							value={data?.lastName}
							label={t("Lastname")}
							onChange={onChangeLastname}
							readonly={readonly}
							data-testid="ProfileCard.lastname"
						/>
						<Input
							value={data?.age}
							label={t("Age")}
							onChange={onChangeAge}
							readonly={readonly}
						/>
						<Input
							value={data?.city}
							label={t("City")}
							onChange={onChangeCity}
							readonly={readonly}
						/>
					</VStack>
					<VStack gap="16" max>
						<Input
							value={data?.username}
							label={t("Username")}
							onChange={onChangeUsername}
							readonly={readonly}
						/>
						<Input
							value={data?.avatar}
							label={t("Avatar link")}
							onChange={onChangeAvatar}
							readonly={readonly}
						/>
						<CurrencySelect
							value={data?.currency}
							onChange={onChangeCurrency}
							readonly={readonly}
						/>
						<CountrySelect
							value={data?.country}
							onChange={onChangeCountry}
							readonly={readonly}
						/>
					</VStack>
				</HStack>
			</VStack>
		</Card>
	);
});
