import { FC } from "react";
import { StyledBox } from "./Box-styles";
import { BoxProps } from "./Box-types";
import React from "react";

const Box: FC<BoxProps> = ({
  _active,
  _disabled,
  _focus,
  _hover,
  sx,
  children,
  ...rest
}) => {
  return (
    <StyledBox
      {...rest}
      _active={_active}
      _disabled={_disabled}
      _focus={_focus}
      _hover={_hover}
      sx={sx}>
      {children}
    </StyledBox>
  );
};

export default Box;
