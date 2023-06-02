import styled from "styled-components";
import { BoxProps } from "./Box-types";

export const StyledBox = styled.div<BoxProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "")};
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
`;
