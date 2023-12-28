import { FC } from "react";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const StyleDecorator: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default StyleDecorator;
