import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { HStack } from "@/shared/ui/Stack";

import cls from "./AddCommentForm.module.scss";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../model/slice/addCommentFormSlice";
import { getAddCommentFormText } from "../model/selectors/addCommentFormSelectors";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(function AddCommentForm(
  props: AddCommentFormProps
) {
  const { className, onSendComment } = props;
  const { t } = useTranslation("article");
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        data-testid="AddCommentForm"
        justify="between"
        max
        className={classNames(cls.AddCommentForm, [className], {})}
      >
        <Input
          className={cls.input}
          placeholder={t("New comment")}
          value={text}
          data-testid="AddCommentForm.Input"
          onChange={onCommentTextChange}
        />
        <Button
          data-testid="AddCommentForm.Button"
          theme={ButtonTheme.OUTLINE}
          onClick={onSendHandler}
        >
          {t("Send")}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
