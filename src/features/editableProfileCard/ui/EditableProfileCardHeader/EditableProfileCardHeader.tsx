import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { Button, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { getUserAuthData } from "@/entities/User";
import { profileActions } from "../../model/slice/profileSlice";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";

interface EditableProfileCardHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = memo(
	function EditableProfileCardHeader(props: EditableProfileCardHeaderProps) {
		const { className } = props;

		const { t } = useTranslation("profile");
		const authData = useSelector(getUserAuthData);
		const profileData = useSelector(getProfileData);
		const canEdit = authData?.id === profileData?.id;
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
					<div>
						{readonly ? (
							<Button
								data-testid="EditableProfileCardHeader.EditButton"
								theme={ButtonTheme.OUTLINE}
								onClick={onEdit}
							>
								{t("Edit")}
							</Button>
						) : (
							<HStack gap="8">
								<Button
									data-testid="EditableProfileCardHeader.CancelButton"
									theme={ButtonTheme.OUTLINE_RED}
									onClick={onCancelEdit}
								>
									{t("Cancel")}
								</Button>
								<Button
									data-testid="EditableProfileCardHeader.SaveButton"
									theme={ButtonTheme.OUTLINE}
									onClick={onSave}
								>
									{t("Save")}
								</Button>
							</HStack>
						)}
					</div>
				)}
			</HStack>
		);
	}
);
