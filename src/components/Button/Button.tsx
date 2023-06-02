import React, { FC } from "react";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { StyledButton } from "./Button-styles";

const Button: FC<ButtonProps> = ({
  colorScheme,
  startIcon,
  endIcon,
  fullWidth,
  size,
  children,
  variant,
  _hover,
  _active,
  _focus,
  _disabled,
  disabled,
  sx,
  ...rest
}) => {
  return (
    <StyledButton
      colorScheme={colorScheme}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      _hover={_hover}
      _active={_active}
      _focus={_focus}
      _disabled={_disabled}
      sx={sx}
      variant={variant ? variant : ButtonVariant.primary}
      {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
};

export default Button;
