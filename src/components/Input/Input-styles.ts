import styled from "styled-components";
import { InputProps } from "./input-type";
import { DefaultColorKey, DefaultColorValue } from "../../theme/theme";
import { ThemePrimaryColor } from "../../theme/Colors";
import { HTMLAttributes } from "react";

const colorSchemeHandler = (color: any) => {
  switch (color) {
    case DefaultColorKey.green:
      return DefaultColorValue.green;
    case DefaultColorKey.orange:
      return DefaultColorValue.orange;
    case DefaultColorKey.purple:
      return DefaultColorValue.purple;
    case DefaultColorKey.red:
      return DefaultColorValue.red;
    case DefaultColorKey.yellow:
      return DefaultColorKey.yellow;
    default:
      return ThemePrimaryColor.default;
  }
};

export const StyledDiv = styled.div<InputProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #e7e7e7;
  padding: 0.375em 0.5em 0.375em 0.75em;
  background-color: white;
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  border-radius: 6px;

  &:hover {
    ${(props) => (props._hover ? props._hover : null)}
  }
  &:focus-within {
    ${(props) => (props._hover ? props._hover : null)}
    border-color: ${(props) => colorSchemeHandler(props.colorScheme)};
  }
  &:active {
    ${(props) => (props._active ? props._active : null)}
  }
  &:disabled {
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }
`;

export const StyledInput = styled.input<InputProps>`
  border: none;
  outline: none;
  padding: 0.063em 0.125em 0.063em 0.125em;
  width: ${(props) => (props.fullWidth ? "100%" : "")};

  &:disabled {
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }
`;
