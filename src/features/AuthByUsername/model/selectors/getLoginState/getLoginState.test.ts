import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginState } from "./getLoginState";

describe("getLoginState.test", () => {
  test("Should return login form state", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "admin",
        password: "123",
        isLoading: true,
        error: "",
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: "admin",
      password: "123",
      isLoading: true,
      error: "",
    });
  });
  test("Should return undefined state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
