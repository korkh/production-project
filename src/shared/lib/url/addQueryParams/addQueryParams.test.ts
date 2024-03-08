import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({
      firstParam: "value",
    });
    expect(params).toBe("?firstParam=value");
  });
  test("test with multiple params", () => {
    const params = getQueryParams({
      firstParam: "value",
      secondParam: "2",
    });
    expect(params).toBe("?firstParam=value&secondParam=2");
  });
  test("test with undefined", () => {
    const params = getQueryParams({
      firstParam: "value",
      secondParam: undefined,
    });
    expect(params).toBe("?firstParam=value");
  });
});
