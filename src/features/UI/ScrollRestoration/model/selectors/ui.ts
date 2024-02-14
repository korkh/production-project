import { StateSchema } from "app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";

export const getScrollRestoration = (state: StateSchema) =>
  state.scrollRestoration.scroll;

// reselect
export const getUIScrollByPath = createSelector(
  getScrollRestoration,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
