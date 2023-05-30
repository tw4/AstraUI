import React, { FC, HTMLAttributes, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  disable?: boolean;
  children: ReactNode;
  customStyle?: CSSProperties;
};

const StyledButton = styled.button<ButtonProps>`
  background-color: #f1f1f1;
  color: #333;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  opacity: ${(props) => (props.disable ? "0.5" : "1")};
`;

const Button: FC<ButtonProps> = ({
  customStyle,
  disable,
  children,
  ...rest
}) => {
  return (
    <StyledButton disable={disable} {...rest} style={customStyle}>
      {children}
    </StyledButton>
  );
};

export default Button;
