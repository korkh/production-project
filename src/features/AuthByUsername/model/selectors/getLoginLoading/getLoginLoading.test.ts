import { getLoginLoading } from "./getLoginLoading";

import { StateSchema } from "@/app/providers/StoreProvider";

describe("getLoginLoading.test", () => {
  test("Should return true", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginLoading(state as StateSchema)).toEqual(true);
  });
  test("Should return false", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginLoading(state as StateSchema)).toEqual(false);
  });
});
