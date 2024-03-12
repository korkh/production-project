import { memo } from "react";

import { useNotifications } from "../../api/notificationApi";
import { Notification } from "../../model/types/notification";
import NotificationItem from "../NotificationItem/NotificationItem";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton";
import { VStack } from "@/shared/ui/Stack";


import cls from "./NotificationList.module.scss";


interface NotificationListProps {
  className?: string;
}

const NotificationList = memo(function NotificationList(
  props: NotificationListProps
) {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        gap="16"
        max
        className={classNames(cls.NotificationList, [className], {})}
      >
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
        <Skeleton width="100%" border="8px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      gap="16"
      max
      className={classNames(cls.NotificationList, [className], {})}
    >
      {data?.map((item: Notification) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});

export default NotificationList;
