type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  additional: string[] = [],
  mods: Mods = {}
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}

// Mods {hovered: true, selectable: true, red: true}

// className = {'', {}, []}
