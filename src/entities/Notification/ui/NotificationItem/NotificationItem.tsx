import { memo } from "react";

import { Notification } from "../../model/types/notification";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "@/shared/ui/deprecated/Card";
import { Text, TextSize } from "@/shared/ui/deprecated/Text";

import cls from "./NotificationItem.module.scss";


interface NotificationItemProps {
  className?: string;
  item: Notification;
}

const NotificationItem = memo(function NotificationItem(
  props: NotificationItemProps
) {
  const { className, item } = props;

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.NotificationItem, [className], {})}
    >
      <Text title={item.title} size={TextSize.S} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      // used <a> to make possible open in new tab
      <a className={cls.link} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});

export default NotificationItem;
