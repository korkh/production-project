import { useTranslation } from "react-i18next";
import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { LoginModal } from "@/features/AuthByUsername";
import { getUserAuthData } from "@/entities/User";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";
import { AppLink, AppLinkTheme } from "@/shared/ui/deprecated/AppLink";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { NotificationButton } from "@/features/notificationButton";

import cls from "./Navbar.module.scss";
import { getRouteArticleCreate } from "@/shared/const/router";
import { ToggleFeatures } from "@/shared/lib/features";
import { AvatarDropdown } from "@/features/avatarDropDown";

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(function Navbar({ className }: NavbarProps) {
	const { t } = useTranslation("navbar");
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	if (authData) {
		return (
			<ToggleFeatures
				feature="isAppRedesigned"
				on={
					<header className={classNames(cls.NavbarRedesigned, [className], {})}>
						<HStack gap="16" className={cls.actions}>
							<NotificationButton />
							<AvatarDropdown />
						</HStack>
					</header>
				}
				off={
					<header className={classNames(cls.Navbar, [className], {})}>
						<Text
							className={cls.appName}
							title={t("MyApp")}
							theme={TextTheme.INVERTED}
						/>
						<AppLink
							to={getRouteArticleCreate()}
							theme={AppLinkTheme.SECONDARY}
							className={cls.createBtn}
						>
							{t("Create article")}
						</AppLink>
						<HStack gap="16" className={cls.actions}>
							<NotificationButton />
							<AvatarDropdown />
						</HStack>
					</header>
				}
			/>
		);
	}

	return (
		<header className={classNames(cls.Navbar, [className], {})}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t("Sign in")}
			</Button>
			{isAuthModal && (
				<LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
			)}
		</header>
	);
});
