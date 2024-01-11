import React, { ReactNode } from "react";
import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

interface StoreDecoratorProps {
  state: DeepPartial<StateSchema>;
  children: ReactNode;
}

const StoreDecorator: React.FC<StoreDecoratorProps> = ({ state, children }) => (
  <StoreProvider initialState={state}>{children}</StoreProvider>
);

export default StoreDecorator;
