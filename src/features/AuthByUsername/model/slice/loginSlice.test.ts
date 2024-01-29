import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "admin" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("admin123")),
    ).toEqual({ username: "admin123" }); // note that due to reducer return partial state we checking for {}
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" };
    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("123123")),
    ).toEqual({ password: "123123" });
  });
});
