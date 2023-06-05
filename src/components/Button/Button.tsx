import React, { FC } from "react";
import { ButtonProps } from "./Button-types";
import { StyledButton, StyledGhostButton } from "./Button-styles";

const Button: FC<ButtonProps> = ({
  variant,
  startIcon,
  endIcon,
  children,
  ...rest
}) => {
  return (
    <>
      {variant && variant === "ghost" ? (
        <StyledGhostButton variant={variant} {...rest}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </StyledGhostButton>
      ) : (
        <StyledButton variant={variant} {...rest}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </StyledButton>
      )}
    </>
  );
};

export default Button;
