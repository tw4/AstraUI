import styled from "styled-components";
import { StackProps } from "./Stack-types";
import { color, flexbox, space, size, grid } from "styled-system";

export const StyledStack = styled.div<StackProps>`
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

  > * {
    margin-bottom: ${(props) => (props.spacingY ? props.spacingY : "0")};
    margin-right: ${(props) => (props.spacingX ? props.spacingX : "0")};
  }
  ${flexbox}
  ${space}
  ${color}
  ${size}
  ${grid}
`;
