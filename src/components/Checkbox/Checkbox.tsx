import React, { FC } from "react";
import { CheckboxProps } from "./Checkbox-types";
import { StyledCheckbox } from "./Checkbox-styles";

const Checkbox: FC<CheckboxProps> = ({
  _active,
  _disabled,
  _focus,
  _hover,
  sx,
  disabled,
  colorScheme,
  fullWidth,
  ...rest
}) => {
  return (
    <StyledCheckbox
      fullWidth={fullWidth}
      colorScheme={colorScheme}
      disabled={disabled}
      type="checkbox"
      _active={_active}
      _disabled={_disabled}
      _focus={_focus}
      _hover={_hover}
      sx={sx}
      {...rest}
    />
  );
};

export default Checkbox;
