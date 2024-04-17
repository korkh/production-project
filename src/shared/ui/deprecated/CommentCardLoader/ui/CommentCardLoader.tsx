import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./CommentCardLoader.module.scss";

import { Skeleton } from "../../Skeleton";
import { HStack, VStack } from "../../../../ui/redesigned/Stack";

interface Props {
	className?: string;
}

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
const CommentCardLoader = ({ className }: Props) => {
	return (
		<VStack
			gap="8"
			max
			className={classNames(cls.commentCard, [className, cls.loading], {})}
			data-testid="CommentCard.Loading"
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
