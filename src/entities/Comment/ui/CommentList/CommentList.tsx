import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./CommentList.module.scss";
import { CommentCard } from "../CommentCard/CommentCard";
import { IComment } from "../../model/types/Comment";

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
      <div className={classNames(cls.commentList, [className], {})}>
        <CommentCard isLoading comment={undefined} />
        <CommentCard isLoading comment={undefined} />
        <CommentCard isLoading comment={undefined} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.commentList, [className], {})}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            className={cls.comment}
            comment={comment}
          />
        ))
      ) : (
        <Text text={t("No comments yet")} />
      )}
    </div>
  );
});
