import styled from "styled-components";
import { CheckboxProps } from "./Checkbox-types";
import { ThemePrimaryColor, colorSchemeHandler } from "../../theme/Colors";

export const StyledCheckbox = styled.input<CheckboxProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "")};

  &:checked {
    accent-color: ${(props) => colorSchemeHandler(props.colorScheme)};
  }
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
