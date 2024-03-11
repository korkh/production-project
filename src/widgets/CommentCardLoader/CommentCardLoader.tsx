import { classNames } from "@/shared/lib/classNames/classNames";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { HStack, VStack } from "@/shared/ui/Stack";
import cls from "./CommentCardLoader.module.scss";

interface Props {
  className?: string;
}

const CommentCardLoader = ({ className }: Props) => {
  return (
    <VStack
      gap="8"
      max
      className={classNames(cls.commentCard, [className, cls.loading], {})}
    >
      <HStack align="center">
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton height={16} width={100} className={cls.username} />
      </HStack>
      <Skeleton className={cls.text} width="100%" height={50} />
    </VStack>
  );
};

export default CommentCardLoader;
