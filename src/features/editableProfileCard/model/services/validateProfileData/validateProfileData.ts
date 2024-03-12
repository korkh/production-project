import { ValidateProfileError } from "../../consts/ValidateProfileError";

import { Profile } from "@/entities/Profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    firstName,
    lastName,
    age,
    country,
    currency,
    city,
    username,
    avatar,
  } = profile;

  const errors: ValidateProfileError[] = [];

  if (!firstName || !lastName) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!currency) {
    errors.push(ValidateProfileError.INCORRECT_CURRENCY);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!avatar) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR_LINK);
  }

  return errors;
};
