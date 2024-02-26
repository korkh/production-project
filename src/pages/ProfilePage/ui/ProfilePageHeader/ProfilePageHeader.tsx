import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useGetEditRight } from "entities/User/model/selectors/getUserEditRight/getUserEditRight";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";

interface ProfilePageHeaderProps {
  className?: string;
}

export function ProfilePageHeader(props: ProfilePageHeaderProps) {
  const { className } = props;

  const { t } = useTranslation("profile");

  const canEdit = useGetEditRight();

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack max justify="between" className={classNames("", [className], {})}>
      <Text title={t("Profile")} />
      {canEdit && (
        <>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t("Edit")}
            </Button>
          ) : (
            <HStack gap="8">
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t("Cancel")}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t("Save")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  );
}
