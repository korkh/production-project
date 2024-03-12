import { memo, useCallback, useState } from "react";

import { NotificationList } from "@/entities/Notification";
import NotificationIcon from "@/shared/assets/icons/notification-20-20.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useDeviceDetection } from "@/shared/lib/hooks/useDeviceDetection/useDeviceDetection";
import { Drawer } from "@/shared/ui/Drawer";
import { Icon } from "@/shared/ui/Icon";
import { Popover } from "@/shared/ui/Popups";

import cls from "./NotificationButton.module.scss";

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(function NotificationButton(
  props: NotificationButtonProps
) {
  const { className } = props;

  const [isOpen, setIsOpen] = useState(false);
  const isMobileWithTouch = useDeviceDetection();

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <span onClick={onOpenDrawer} className={cls.button}>
      <Icon Svg={NotificationIcon} inverted />
    </span>
  );

  return isMobileWithTouch ? (
    <>
      {trigger}
      {/* animation libraries only for mobiles */}
      <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
        <NotificationList />
      </Drawer>
    </>
  ) : (
    <Popover
      className={classNames(cls.NotificationButton, [className], {})}
      direction="bottom left"
      trigger={trigger}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  );
});
