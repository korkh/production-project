import { Reducer } from "@reduxjs/toolkit";
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from "app/providers/StoreProvider/config/StateSchema";
import { FC, PropsWithChildren, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>; //ensuring that the type associated with the key [name] in the StateSchema object is not null or undefined.
};
interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

/**
 * This component is intended to be used as a wrapper around parts of the application that need dynamic loading and unloading of Redux modules (reducers).
 * It allows for a more flexible and dynamic structure where modules can be added or removed during runtime.
 *
 * @param props - The properties passed to the `DynamicModuleLoader` component.
 *   - `reducers`: An object containing reducer functions mapped by their respective keys.
 *   - `removeAfterUnmount` (optional): A boolean flag indicating whether to remove the reducers from the store after the component unmounts.
 *
 * @returns React component that dynamically loads and unloads Redux modules based on the provided props.
 */

export const DynamicModuleLoader: FC<
  PropsWithChildren<DynamicModuleLoaderProps>
> = (props) => {
  const { children, reducers, removeAfterUnmount = "true" } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateSchemaKey];
      // add new reducer if not in the list
      if (mounted !== reducer) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
