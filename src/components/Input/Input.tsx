import React from "react";
import { StyledDiv, StyledInput } from "./Input-styles";
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
}) => {
  return (
    <StyledDiv
      colorScheme={colorScheme}
      _active={_active}
      _disabled={_disabled}
      _focus={_focus}
      _hover={_hover}
      fullWidth={fullWidth}>
      {startIcon}
      <StyledInput
        disabled={disabled}
        fullWidth={fullWidth}
        defaultValue={defaultValue}
      />
      {endIcon}
    </StyledDiv>
  );
};

export default Input;