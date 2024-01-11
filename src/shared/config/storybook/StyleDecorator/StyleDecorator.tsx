import { FC } from "react";
import React from "react";

interface Props {
  children?: React.ReactNode;
}

const StyleDecorator: FC<Props> = ({ children }) => {
  return <div style={{ padding: "20px" }}>{children}</div>;
};

export default StyleDecorator;
