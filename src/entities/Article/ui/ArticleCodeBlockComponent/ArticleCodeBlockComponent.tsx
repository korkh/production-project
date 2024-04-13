import { memo } from "react";

import { ArticleCodeBlock } from "../../model/types/article";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Code } from "@/shared/ui/deprecated//Code";

import cls from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent = memo(function ArticleCodeBlockComponent(
  props: ArticleCodeBlockComponentProps
) {
  const { className, block } = props;

  return (
    <div className={classNames(cls.articleCodeBlockComponent, [className], {})}>
      <Code text={block.code} />
    </div>
  );
});

export default ArticleCodeBlockComponent;
