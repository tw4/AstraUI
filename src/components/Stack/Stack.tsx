import { FC } from "react";
import { StyledStack } from "./Stack-styles";
import { StackProps } from "./Stack-types";
import React from "react";

const Stack: FC<StackProps> = ({
  _active,
  _disabled,
  _focus,
  _hover,
  sx,
  direction,
  fullWidth,
  children,
  spacingX,
  spacingY,
  ...rest
}) => {
  return (
    <StyledStack
      spacingX={spacingX}
      spacingY={spacingY}
      direction={direction}
      fullWidth={fullWidth}
      sx={sx}
      _active={_active}
      _disabled={_disabled}
      _focus={_focus}
      _hover={_hover}
      {...rest}>
      {children}
    </StyledStack>
  );
};

export default Stack;
