import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import React from 'react';

interface Props {
  children?: React.ReactNode;
}
const RouterDecorator: FC<Props> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
export default RouterDecorator;
