import { FC } from "react";
import { StyledBox } from "./Box-styles";
import { BoxProps } from "./Box-types";
import React from "react";

const Box: FC<BoxProps> = ({ children, ...rest }) => {
  return <StyledBox {...rest}>{children}</StyledBox>;
};

export default Box;
