import { FC } from "react";
import { TextProps } from "./Text-types";
import React from "react";
import { StyledText } from "./Text-styles";

const Text: FC<TextProps> = ({
  _active,
  _disabled,
  _focus,
  _hover,
  children,
  fullWidth,
  fontsize,
  color,
}) => {
  return (
    <StyledText
      color={color}
      fontsize={fontsize}
      fullWidth={fullWidth}
      _active={_active}
      _disabled={_disabled}
      _focus={_focus}
      _hover={_hover}>
      {children}
    </StyledText>
  );
};

export default Text;
