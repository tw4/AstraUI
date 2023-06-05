import { FC } from "react";
import { BoxProps } from "./Box-types";
import React from "react";
import { StyledBox } from "./Box-styles";

const Box: FC<BoxProps> = ({ color, children, ...rest }) => {
  return (
    <StyledBox color={color as string} {...rest}>
      {children}
    </StyledBox>
  );
};

export default Box;
