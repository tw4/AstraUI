import styled from "styled-components";
import { StackProps } from "./Stack-types";

export const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};

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
`;
