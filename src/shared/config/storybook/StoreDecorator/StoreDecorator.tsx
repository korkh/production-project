import React, { ReactNode } from "react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";

interface StoreDecoratorProps {
  state: DeepPartial<StateSchema>;
  children: ReactNode;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

const StoreDecorator: React.FC<StoreDecoratorProps> = ({
  state,
  children,
  asyncReducers,
}) => (
  <StoreProvider
    initialState={state}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    {children}
  </StoreProvider>
);

export default StoreDecorator;
