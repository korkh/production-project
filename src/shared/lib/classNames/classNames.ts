type Mods = Record<string, boolean | string | undefined>;

export function classNames(
  cls: string,
  additional: string[] = [],
  mods: Mods = {}
): string {
  // Комбинируем различные классы и модификаторы в одну строку с пробелами
  return [
    cls, // Основной класс
    ...additional.filter(Boolean), // Дополнительные классы, предоставленные в виде массива
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value)) // Фильтруем ключи с ложными значениями выбираем только true
      .map(([className]) => className), // Извлекаем ключи в виде имен классов
  ].join(" ");
}

// Mods {hovered: true, selectable: true, red: true}

// className = {'', {}, []}

/** Логика:
Создает массив, начиная с основного класса (cls), затем добавляет любые дополнительные классы (additional), которые не являются ложными (пустые строки или undefined).
Фильтрует объект mods, чтобы включить только те ключи, у которых связанные значения истинны (не false, null, undefined или пустая строка).
Преобразует эти истинные ключи в соответствующие имена классов и добавляет их в массив.
Объединяет элементы массива в строку с пробелами, создавая конечную строку объединенных CSS классов. */
