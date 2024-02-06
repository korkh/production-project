import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import React, { ReactNode } from "react";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface StoreDecoratorProps {
  state: DeepPartial<StateSchema>;
  children: ReactNode;
  asyncReducers?: ReducersList;
}

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
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
