import React, { FC } from "react";
import { StyledInput, StyledInputDiv } from "./Input-styles";
import { InputProps } from "./input-types";

const Input: FC<InputProps> = ({
  backgroundColor,
  startIcon,
  endIcon,
  _hover,
  _active,
  _focus,
  _disabled,
  sx,
  color,
  ...rest
}) => {
  return (
    <StyledInputDiv
      _active={_active}
      _focus={_focus}
      _disabled={_disabled}
      _hover={_hover}
      sx={sx}
      backgroundColor={backgroundColor}>
      <span>{startIcon}</span>
      <StyledInput
        color={color as string}
        backgroundColor={backgroundColor}
        {...rest}
      />
      <span>{endIcon}</span>
    </StyledInputDiv>
  );
};

export default Input;
