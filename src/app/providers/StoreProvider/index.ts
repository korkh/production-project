import type { StateSchema, ThunkConfig } from "./config/StateSchema";
import { createReduxStore } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch } from "./config/store";

export { StoreProvider, createReduxStore };
export type {StateSchema, ThunkConfig, AppDispatch};
