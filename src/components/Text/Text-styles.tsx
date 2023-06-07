import styled from "styled-components";
import { TextProps } from "./Text-types";
import { color, space, typography } from "styled-system";

export const StyledText = styled.text<TextProps>`
  ${(props) => (props.sx ? props.sx : "")}
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

  ${color}
  ${typography}
  ${space}
`;
