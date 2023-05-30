import { ButtonProps, ButtonSize, ButtonVariant } from "./Button-types";
import styled from "styled-components";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.variant && props.variant === ButtonVariant.filled
      ? "white"
      : props.variant === ButtonVariant.tinted
      ? "#007AFF"
      : "black"};
  background-color: ${(props) =>
    props.variant && props.variant === ButtonVariant.filled
      ? "#007AFF"
      : props.variant === ButtonVariant.tinted
      ? "#D9E8FA"
      : props.variant === ButtonVariant.disable
      ? "#E8E8ED"
      : props.variant === ButtonVariant.plain
      ? "transparent"
      : "#007AFF"};
  width: ${(props) => (props.fullWidth && props.fullWidth ? "100%" : null)};
  height: ${(props) =>
    props.size === ButtonSize.small
      ? "32px"
      : props.size === ButtonSize.medium
      ? "44px"
      : props.size === ButtonSize.large
      ? "48px"
      : null};
  padding: 14px 20px;
  border: none;
  border-radius: 14px;

  &:hover {
    filter: brightness(0.9);
  }
`;
