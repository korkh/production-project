import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { SidebarItemType } from "../../model/types/Sidebar";

import { getUserAuthData } from "@/entities/User";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";


import cls from "./SidebarItem.module.scss";



interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(function SidebarItem({
  item,
  collapsed,
}: SidebarItemProps) {
  const { t } = useTranslation("translation");
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

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
