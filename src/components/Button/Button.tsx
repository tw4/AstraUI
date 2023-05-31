import React, { FC } from "react";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { StyledButton } from "./Button-styles";

const Button: FC<ButtonProps> = ({
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
  ...rest
}) => {
  return (
    <StyledButton
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      _hover={_hover}
      _active={_active}
      _focus={_focus}
      _disabled={_disabled}
      variant={variant ? variant : ButtonVariant.primary}
      {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </StyledButton>
  );
};

export default Button;
