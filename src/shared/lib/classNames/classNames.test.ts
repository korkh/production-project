import { classNames } from "./classNames";

describe("classNames", () => {
  test("Test 1: with 1st param only", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("Test 2: with additional class in array", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });
  test("Test 3: with mods", () => {
    const expected = "someClass class1 class2 hovered scrollabale";
    expect(
      classNames("someClass", { hovered: true, scrollabale: true }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
  test("Test 4: with mods false", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollabale: false }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
  test("Test 5: with mods undefined", () => {
    const expected = "someClass class1 class2 hovered";
    expect(
      classNames("someClass", { hovered: true, scrollabale: undefined }, [
        "class1",
        "class2",
      ])
    ).toBe(expected);
  });
});
