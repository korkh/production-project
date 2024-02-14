import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UISchema } from "../types/UISchema";

const initialState: UISchema = {
  scroll: {},
};

export const scrollRestorationSlice = createSlice({
  name: "scrollRestoration",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<{ path: string; position: number }>
    ) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: scrollRestorationActions } = scrollRestorationSlice;
export const { reducer: scrollRestorationReducer } = scrollRestorationSlice;
