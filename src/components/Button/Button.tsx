import React, { FC } from "react";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { StyledButton } from "./Button-styles";

const Button: FC<ButtonProps> = ({
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
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      _hover={_hover}
      _active={_active}
      _focus={_focus}
      _disabled={_disabled}
      variant={variant ? variant : ButtonVariant.primary}
      {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
