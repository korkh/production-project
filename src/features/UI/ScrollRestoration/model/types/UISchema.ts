// <Адрес страницы, позиция скролла>
export type ScrollRestorationSchema = Record<string, number>;

export interface UISchema {
  scroll: ScrollRestorationSchema;
}
