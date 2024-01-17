import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/items";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem({
  item,
  collapsed,
}: SidebarItemProps) {
  const { t } = useTranslation();

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, undefined, {
        [cls.collapsed]: collapsed,
      })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
