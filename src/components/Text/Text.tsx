import { FC } from "react";
import { TextProps } from "./Text-types";
import React from "react";
import { StyledText } from "./Text-styles";

const Text: FC<TextProps> = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
