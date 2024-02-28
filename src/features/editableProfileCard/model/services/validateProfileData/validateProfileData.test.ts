import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "../../types/EditableProfileCard";
import { validateProfileData } from "./validateProfileData";

const data = {
  username: "admin",
  age: 22,
  country: Country.Norway,
  lastName: "Hansen",
  firstName: "Peter",
  city: "Oslo",
  currency: Currency.NOK,
  avatar: "http://someavatar",
};

describe("validateProfileData", () => {
  test("success", async () => {
    // validateProfileData is not async thunk so we can call just validateProfileData()
    const result = validateProfileData(data);
    //all valid so we will receive empty array
    expect(result).toEqual([]);
  });

  test("without first and last name", async () => {
    const result = validateProfileData({
      ...data,
      firstName: "",
      lastName: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect country", async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect currency", async () => {
    const result = validateProfileData({ ...data, currency: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
  });

  test("incorrect city", async () => {
    const result = validateProfileData({ ...data, city: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("incorrect username", async () => {
    const result = validateProfileData({ ...data, username: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });

  test("incorrect avtar link", async () => {
    const result = validateProfileData({ ...data, avatar: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR_LINK]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_CURRENCY,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.INCORRECT_AVATAR_LINK,
    ]);

    /** or can be checked separate
     * expect(result).toContainEqual(ValidateProfileError.INCORRECT_USER_DATA);
expect(result).toContainEqual(ValidateProfileError.INCORRECT_AVATAR_LINK);
expect(result).toContainEqual(ValidateProfileError.INCORRECT_CITY);
expect(result).toContainEqual(ValidateProfileError.INCORRECT_USERNAME);
expect(result).toContainEqual(ValidateProfileError.INCORRECT_AGE);
expect(result).toContainEqual(ValidateProfileError.INCORRECT_COUNTRY);
expect(result).toContainEqual(ValidateProfileError.INCORRECT_CURRENCY);

     */
  });
});
