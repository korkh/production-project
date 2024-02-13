import { Currency } from "entities/Currency/model/types/currency";
import { Country } from "entities/Country/model/types/country";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_USERNAME = "INCORRECT_USERNAME",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
  INCORRECT_CURRENCY = "INCORRECT_CURRENCY",
  INCORRECT_CITY = "INCORRECT_CITY",
  INCORRECT_AVATAR_LINK = "INCORRECT_AVATAR_LINK",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}
export interface Profile {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
