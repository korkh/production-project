import { memo, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { VStack } from "@/shared/ui/redesigned/Stack";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { ToggleFeatures } from "@/shared/lib/features";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { Icon } from "@/shared/ui/redesigned/Icon";
import ArrowIcon from "@/shared/assets/icons/arrow-bottom.svg";
import { LangSwitcher } from "@/features/LangSwither";

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(function Sidebar({ className }: SidebarProps) {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);

	const onToggle = () => {
		console.log(collapsed);
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(
		() =>
			sidebarItemsList.map((item) => (
				<SidebarItem item={item} collapsed={collapsed} key={item.path} />
			)),
		[collapsed, sidebarItemsList]
	);

	return (
		<ToggleFeatures
			feature="isAppRedesigned"
			on={
				<aside
					data-testid="sidebar"
					className={classNames(cls.SidebarRedesigned, [className], {
						[cls.collapsedRedesigned]: collapsed,
					})}
				>
					<AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
					<VStack role="navigation" gap="8" className={cls.items}>
						{itemsList}
					</VStack>
					<Icon
						data-testid="sidebar-toggle"
						onClick={onToggle}
						className={cls.collapseBtn}
						Svg={ArrowIcon}
						clickable
					/>
					<div className={cls.switchers}>
						<ThemeSwitcher />
						<LangSwitcher short={collapsed} className={cls.lang} />
					</div>
				</aside>
			}
			off={
				<aside
					data-testid="sidebar"
					className={classNames(cls.Sidebar, [className], {
						[cls.collapsed]: collapsed,
					})}
				>
					<Button
						data-testid="sidebar-toggle"
						onClick={onToggle}
						className={cls.collapseBtn}
						theme={ButtonTheme.BACKGROUND_INVERTED}
						size={ButtonSize.L}
						square
					>
						{collapsed ? ">" : "<"}
					</Button>
					<VStack role="navigation" gap="8" className={cls.items}>
						{itemsList}
					</VStack>
					<div className={cls.switchers}>
						<ThemeSwitcher />
						<LangSwitcher short={collapsed} className={cls.lang} />
					</div>
				</aside>
			}
		/>
	);
});
