import React from "react";
import { StyledInputdDiv, StyledInput } from "./Input-styles";
import { FC } from "react";
import { InputProps } from "./input-type";

const Input: FC<InputProps> = ({
  endIcon,
  startIcon,
  disabled,
  defaultValue,
  colorScheme,
  fullWidth,
  _active,
  _disabled,
  _focus,
  _hover,
  sx,
  ...rest
}) => {
  return (
    <StyledInputdDiv
      colorScheme={colorScheme}
      _active={_active}
      _disabled={_disabled}
      _focus={_focus}
      _hover={_hover}
      sx={sx}
      fullWidth={fullWidth}>
      {startIcon}
      <StyledInput
        disabled={disabled}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
        {...rest}
      />
      {endIcon}
    </StyledInputdDiv>
  );
};

export default Input;
