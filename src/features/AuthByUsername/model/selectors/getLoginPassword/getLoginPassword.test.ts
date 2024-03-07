import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";

describe("getLoginPassword.test", () => {
  test("Should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "123",
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual("123");
  });
  test("Should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
