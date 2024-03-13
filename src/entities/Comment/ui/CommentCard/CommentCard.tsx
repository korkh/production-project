import { memo } from "react";

import { IComment } from "../../model/types/Comment";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar";
import { CommentCardLoader } from "@/shared/ui/CommentCardLoader";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

import cls from "./CommentCard.module.scss";
import { getRouteProfile } from "@/shared/const/router";

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo(function CommentCard(props: CommentCardProps) {
  const { className, comment, isLoading } = props;

  // Loading skeleton
  if (isLoading) {
    return <CommentCardLoader />;
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.commentCard, [className], {})}
    >
      <AppLink to={getRouteProfile(comment?.user.id)} className={cls.header}>
        {comment?.user.avatar ? (
          <Avatar size={30} src={comment?.user.avatar} />
        ) : null}
        <Text className={cls.username} title={comment?.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment?.text} />
    </VStack>
  );
});
