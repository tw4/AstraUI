import styled from "styled-components";
import { InputProps } from "./input-types";
import { color } from "styled-system";

export const StyledInputDiv = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e7e7e7;
  padding: 0.375em 0.5em 0.375em 0.75em;
  background-color: ${(props) => props.backgroundColor || "white"};
  border-radius: 6px;
  width: fit-content;
  ${(props) => (props.sx ? props.sx : "")}
  &:hover {
    ${(props) => (props._hover ? props._hover : null)}
  }
  &:focus-within {
    ${(props) => (props._hover ? props._hover : null)}
  }
  &:active {
    ${(props) => (props._active ? props._active : null)}
  }
  &:disabled {
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }

  ${color}
`;

export const StyledInput = styled.input<InputProps>`
  background-color: ${(props) => props.backgroundColor || "white"};
  border: none;
  outline: none;
  padding: 0.063em 0.125em 0.063em 0.125em;

  &:disabled {
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }
  ${color}
`;
