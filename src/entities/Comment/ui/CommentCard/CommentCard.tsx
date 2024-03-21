import { memo, useEffect, useState } from "react";

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

  const [commentLoaded, setCommentLoaded] = useState(false); // State to track if articles are loaded

  // Effect to run when articles are loaded
  useEffect(() => {
    if (comment) {
      setCommentLoaded(true);
    }
  }, [comment]);

  // Loading skeleton
  if (isLoading) {
    return <CommentCardLoader />;
  }

  if (!comment || !commentLoaded) {
    return null;
  }

  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.commentCard, [className], {})}
      data-testid="CommentCard.Content"
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
