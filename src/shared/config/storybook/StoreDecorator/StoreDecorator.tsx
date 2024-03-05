import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { articleDetailsReducer } from "@/entities/Article/model/slice/articleDetailsSlice";
import { addCommentFormReducer } from "@/features/addCommentForm/model/slice/addCommentFormSlice";
import { loginReducer } from "@/features/AuthByUsername/model/slice/loginSlice";
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";
import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/model/slices";
import React, { ReactNode } from "react";
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
