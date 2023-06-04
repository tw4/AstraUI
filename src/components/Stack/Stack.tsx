import { FC } from "react";
import { StyledStack } from "./Stack-styles";
import { StackProps } from "./Stack-types";
import React from "react";

const Stack: FC<StackProps> = ({ children, ...rest }) => {
  return <StyledStack {...rest}>{children}</StyledStack>;
};

export default Stack;
