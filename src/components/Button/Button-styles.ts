import { ThemePrimaryColor } from "../../theme/theme";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { FontSizeValue, SizeKey, SizeValue } from "../../theme/theme-enum";
import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background-color: ${ThemePrimaryColor.default};
    color: ${ThemePrimaryColor.textLight};
    &:hover {
      background-color: ${ThemePrimaryColor.hover};
    }
    &:focus {
      background-color: ${ThemePrimaryColor.focus};
    }
    &:disabled {
      cursor: default;
      outline-style: none;
      background-color: ${ThemePrimaryColor.default};
      color: ${ThemePrimaryColor.textLight};
      opacity: 0.5;
    }
  `,
  ghost: css`
    background-color: transparent;
    border: 2px solid ${ThemePrimaryColor.default};
    color: ${ThemePrimaryColor.default};
    &:hover {
      border-color: ${ThemePrimaryColor.hover};
      color: ${ThemePrimaryColor.hover};
    }
    &:focus {
      border-color: ${ThemePrimaryColor.focus};
      color: ${ThemePrimaryColor.textLight};
      background-color: ${ThemePrimaryColor.focus};
    }
    &:disabled {
      cursor: default;
      outline-style: none;
      border-color: ${ThemePrimaryColor.default};
      color: ${ThemePrimaryColor.default};
      opacity: 0.5;
    }
  `,
  text: css`
    color: ${ThemePrimaryColor.default};
    background-color: transparent;
    border-bottom: 2px solid ${ThemePrimaryColor.hover};
    border-radius: 0;
    padding: 0 2px;
    &:hover {
      color: ${ThemePrimaryColor.hover};
      border-color: ${ThemePrimaryColor.hover};
    }
    &:focus {
      color: ${ThemePrimaryColor.textLight};
      background-color: ${ThemePrimaryColor.focus};
      border-color: ${ThemePrimaryColor.textLight};
    }
    &:disabled {
      cursor: default;
      color: ${ThemePrimaryColor.default};
      border-color: ${ThemePrimaryColor.default};
      opacity: 0.5;
    }
  `,
  circle: css`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    background-color: ${ThemePrimaryColor.default};
    color: ${ThemePrimaryColor.textLight};
    &:hover {
      background-color: ${ThemePrimaryColor.hover};
    }
    &:focus {
      background-color: ${ThemePrimaryColor.focus};
    }
    &:disabled {
      cursor: default;
      background-color: ${ThemePrimaryColor.default};
      color: ${ThemePrimaryColor.textLight};
      opacity: 0.5;
    }
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition-duration: 0.2s;
  padding: ${(props) =>
    props.size && props.size === SizeKey.small
      ? SizeValue.small
      : props.size === SizeKey.medium
      ? SizeValue.medium
      : props.size === SizeKey.large
      ? SizeValue.large
      : SizeValue.small};
  font-size: ${(props) =>
    props.size && props.size === SizeKey.small
      ? FontSizeValue.small
      : props.size === SizeKey.medium
      ? FontSizeValue.medium
      : props.size === SizeKey.large
      ? FontSizeValue.large
      : FontSizeValue.small};
  border-radius: 8px;
  border: none;
  width: ${(props) => (props.fullWidth ? "100%" : null)};
  ${(props) =>
    props.variant && props.variant === ButtonVariant.primary
      ? variants.primary
      : props.variant === ButtonVariant.ghost
      ? variants.ghost
      : props.variant === ButtonVariant.text
      ? variants.text
      : props.variant === ButtonVariant.circle
      ? variants.circle
      : null}
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
    ${(props) => (props._disabled ? props._disabled : null)}
  }
`;
