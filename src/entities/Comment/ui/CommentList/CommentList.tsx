import { memo } from "react";
import { useTranslation } from "react-i18next";

import { IComment } from "../../model/types/Comment";
import { CommentCard } from "../CommentCard/CommentCard";

import { classNames } from "@/shared/lib/classNames/classNames";
import { VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo(function CommentList(props: CommentListProps) {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation("article");
  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames("", [className], {})}>
        <CommentCard isLoading comment={undefined} />
        <CommentCard isLoading comment={undefined} />
        <CommentCard isLoading comment={undefined} />
      </VStack>
    );
  }
  return (
    <VStack gap="16" max className={classNames("", [className], {})}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t("No comments yet")} />
      )}
    </VStack>
  );
});
