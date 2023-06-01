import styled from "styled-components";
import { TextProps } from "./Text-types";
import { FontSizeValue } from "../../theme/theme-enum";

export const StyledText = styled.p<TextProps>`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) =>
    props.fontsize ? props.fontsize : FontSizeValue.medium};
  width: ${(props) => (props.fullWidth ? "100%" : "")};

  &:hover {
    ${(props) => (props._hover ? props._hover : null)}
  }
  &:focus {
    ${(props) => (props._focus ? props._focus : null)}
  }
  &:active {
    ${(props) => (props._active ? props._active : null)}
  }
  &:disabled {
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }
`;
