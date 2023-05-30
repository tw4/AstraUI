import React, { FC } from "react";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { StyledButton } from "./Button-styles";

const Button: FC<ButtonProps> = ({ size, sx, children, variant, ...rest }) => {
  return (
    <StyledButton
      size={size}
      variant={variant ? variant : ButtonVariant.filled}
      {...rest}
      style={sx}>
      {children}
    </StyledButton>
  );
};

export default Button;
