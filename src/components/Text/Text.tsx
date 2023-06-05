import { FC } from "react";
import { TextProps } from "./Text-types";
import React from "react";
import { StyledText } from "./Text-styles";

const Text: FC<TextProps> = ({ color, children, ...rest }) => {
  return (
    <StyledText color={color as string} {...rest}>
      {children}
    </StyledText>
  );
};

export default Text;
