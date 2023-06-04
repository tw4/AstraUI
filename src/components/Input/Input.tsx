import React, { FC } from "react";
import { StyledInput, StyledInputDiv } from "./Input-styles";
import { InputProps } from "./input-type";

const Input: FC<InputProps> = ({
  backgroundColor,
  startIcon,
  endIcon,
  _hover,
  _active,
  _focus,
  _disabled,
  sx,
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
      <StyledInput backgroundColor={backgroundColor} {...rest} />
      <span>{endIcon}</span>
    </StyledInputDiv>
  );
};

export default Input;
