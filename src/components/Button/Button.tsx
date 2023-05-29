import React, { FC, HTMLAttributes, ReactNode, CSSProperties } from "react";

type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  disable?: boolean;
  children: ReactNode;
  customStyle?: CSSProperties;
};

const Button: FC<ButtonProps> = ({
  customStyle,
  disable,
  children,
  ...rest
}) => {
  const buttonStyle: CSSProperties = {
    opacity: disable ? "0.5" : "1",
    ...customStyle,
  };

  return (
    <button {...rest} style={buttonStyle}>
      {children}
    </button>
  );
};

export default Button;
