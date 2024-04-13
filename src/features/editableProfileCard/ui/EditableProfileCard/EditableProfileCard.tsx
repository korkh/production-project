import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { ValidateProfileError } from "../../model/consts/ValidateProfileError";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm";

import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ProfileCard } from "@/entities/Profile";
import { classNames } from "@/shared/lib/classNames/classNames";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";


import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Text, TextTheme } from "@/shared/ui/deprecated/Text";

import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "../../model/slice/profileSlice";
import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { getProfileValidateErrors } from "../../model/selectors/getProfileValidateError/getProfileValidateErrors";

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo(function EditableProfileCard(
  props: EditableProfileCardProps
) {
  const { className, id } = props;
  const { t } = useTranslation("profile");

  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t("Server error on saving"),
    [ValidateProfileError.INCORRECT_AGE]: t("Incorrect user age"),
    [ValidateProfileError.INCORRECT_AVATAR_LINK]: t("Incorrect avatar link"),
    [ValidateProfileError.INCORRECT_CITY]: t("Incorrect city"),
    [ValidateProfileError.INCORRECT_COUNTRY]: t("Incorrect country"),
    [ValidateProfileError.INCORRECT_CURRENCY]: t("Incorrect currency"),
    [ValidateProfileError.INCORRECT_USERNAME]: t("Incorrect username"),
    [ValidateProfileError.INCORRECT_USER_DATA]: t(
      "Name and Lastname are required"
    ),
    [ValidateProfileError.NO_DATA]: t("Missing data"),
  };

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ firstName: value || "" }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastName: value || "" }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={classNames("", [className], {})}>
        <EditableProfileCardHeader />
        {validateErrors?.length &&
          validateErrors.map((err) => (
            <Text
              data-testid="EditableProfileCard.Error"
              key={err}
              theme={TextTheme.ERROR}
              text={validateErrorTranslates[err]}
            />
          ))}
        <ProfileCard
          data={formData}
          data-testid="ProfileCard"
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
