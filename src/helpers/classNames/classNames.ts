// Object with Mods as Key - className, value -boolean flag
// if true add class, otherwise remove
type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string, //className f.ex.: .app
  mods: Mods,
  additional: string[] //additional classes
): string {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}
