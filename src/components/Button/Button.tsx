import React, { FC } from "react";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { StyledButton } from "./Button-styles";

const Button: FC<ButtonProps> = ({
  fullWidth,
  size,
  children,
  variant,
  disabled,
  ...rest
}) => {
  return (
    <StyledButton
      disabled={disabled}
      size={size}
      fullWidth={fullWidth}
      variant={variant ? variant : ButtonVariant.primary}
      {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
