import React, { ReactNode } from "react";

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsReducer } from "@/entities/Article/testing";
import { loginReducer } from "@/features/AuthByUsername/testing";
import { addCommentFormReducer } from "@/features/addCommentForm/testing";
import { profileReducer } from "@/features/editableProfileCard/testing";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface StoreDecoratorProps {
  state: DeepPartial<StateSchema>;
  children: ReactNode;
  asyncReducers?: ReducersList;
}

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
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
