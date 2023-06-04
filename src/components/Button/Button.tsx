import React, { FC } from "react";
import { ButtonProps } from "./Button-types";
import StyledButton from "./Button-styles";

const Button: FC<ButtonProps> = ({ startIcon, endIcon, children, ...rest }) => {
  return (
    <StyledButton startIcon={startIcon} endIcon={endIcon} {...rest}>
      <span> {startIcon}</span>
      {children}
      <span> {endIcon}</span>
    </StyledButton>
  );
};

export default Button;
