import { StateSchema } from "@/app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginUsername.test", () => {
  test("Should return value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "uasia",
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual("uasia");
  });
  test("Should return empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
