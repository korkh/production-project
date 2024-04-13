import { memo, useCallback, useState } from "react";

import { Button } from "../Button/Button";
import { ButtonTheme } from "../Button/consts/ButtonTheme";

import CopyIcon from "@/shared/assets/icons/copy-20-20.svg";
import DoneBtn from "@/shared/assets/icons/done-20-20.svg";
import { classNames } from "@/shared/lib/classNames/classNames";

import cls from "./Code.module.scss";


interface CodeProps {
  className?: string;
  text: string;
  copied?: boolean;
}

/**
 * @deprecated This component is deprecated. Please use the new components from the redesigned folder.
 */
export const Code = memo(function Code(props: CodeProps) {
  const { className, text, copied = false } = props;
  const [done, setCopied] = useState(copied);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  }, [text]);

  return (
    <pre className={classNames(cls.code, [className], {})}>
      {
        <Button
          onClick={onCopy}
          className={cls.copyBtn}
          theme={ButtonTheme.CLEAR}
        >
          {!done ? (
            <CopyIcon className={cls.copyIcon} />
          ) : (
            <DoneBtn className={cls.doneIcon} />
          )}
        </Button>
      }
      <code>{text}</code>
    </pre>
  );
});
