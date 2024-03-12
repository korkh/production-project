import { ArticleImageBlock } from "../../model/types/article";
import { memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Text, TextAlign } from "@/shared/ui/Text";
import cls from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent = memo(function ArticleImageBlockComponent(
  props: ArticleImageBlockComponentProps
) {
  const { className, block } = props;
  return (
    <div
      className={classNames(cls.articleImageBlockComponent, [className], {})}
    >
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
});

export default ArticleImageBlockComponent;
