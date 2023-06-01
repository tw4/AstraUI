import {
  GreenColorScheme,
  OrangeColorScheme,
  PurpleColorScheme,
  RedColorScheme,
  ThemePrimaryColor,
  YellowColorScheme,
} from "../../theme/Colors";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { FontSizeValue, SizeKey, SizeValue } from "../../theme/theme-enum";
import styled, { css } from "styled-components";
import { ColorScheme } from "../../types";
import { DefaultColorKey } from "../../theme/theme";

const variants = (color?: any) => {
  let colorScheme: ColorScheme = ThemePrimaryColor;
  switch (color) {
    case DefaultColorKey.green:
      colorScheme = GreenColorScheme;
      break;
    case DefaultColorKey.orange:
      colorScheme = OrangeColorScheme;
      break;
    case DefaultColorKey.purple:
      colorScheme = PurpleColorScheme;
      break;
    case DefaultColorKey.red:
      colorScheme = RedColorScheme;
      break;
    case DefaultColorKey.yellow:
      colorScheme = YellowColorScheme;
      break;
    default:
      break;
  }
  return {
    primary: css`
      background-color: ${colorScheme.default};
      color: ${colorScheme.textLight};
      &:hover {
        background-color: ${colorScheme.hover};
      }
      &:focus {
        background-color: ${colorScheme.focus};
      }
      &:disabled {
        outline-style: none;
        background-color: ${colorScheme.default};
        color: ${colorScheme.textLight};
        opacity: 0.5;
      }
    `,
    ghost: css`
      background-color: transparent;
      border: 2px solid ${colorScheme.default};
      color: ${colorScheme.default};
      &:hover {
        border-color: ${colorScheme.hover};
        color: ${colorScheme.hover};
      }
      &:focus {
        border-color: ${colorScheme.focus};
        color: ${colorScheme.textLight};
        background-color: ${colorScheme.focus};
      }
      &:disabled {
        cursor: default;
        outline-style: none;
        border-color: ${colorScheme.default};
        color: ${colorScheme.default};
        opacity: 0.5;
      }
    `,
    text: css`
      color: ${colorScheme.default};
      background-color: transparent;
      &:hover {
        color: ${colorScheme.hover};
      }
      &:focus {
        color: ${colorScheme.focus};
      }
      &:disabled {
        color: ${colorScheme.default};
        opacity: 0.5;
      }
    `,
    circle: css`
      border-radius: 100%;
      width: 50px;
      height: 50px;
      background-color: ${colorScheme.default};
      color: ${colorScheme.textLight};
      &:hover {
        background-color: ${colorScheme.hover};
      }
      &:focus {
        background-color: ${colorScheme.focus};
      }
      &:disabled {
        background-color: ${colorScheme.default};
        color: ${colorScheme.textLight};
        opacity: 0.5;
      }
    `,
  };
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
      : FontSizeValue.medium};
  border-radius: 8px;
  border: none;
  width: ${(props) => (props.fullWidth ? "100%" : null)};
  ${(props) =>
    props.variant && props.variant === ButtonVariant.primary
      ? props.colorScheme
        ? variants(props.colorScheme).primary
        : variants().primary
      : props.variant === ButtonVariant.ghost
      ? props.colorScheme
        ? variants(props.colorScheme).ghost
        : variants().ghost
      : props.variant === ButtonVariant.text
      ? props.colorScheme
        ? variants(props.colorScheme).text
        : variants().text
      : props.variant === ButtonVariant.circle
      ? props.colorScheme
        ? variants(props.colorScheme).circle
        : variants().circle
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
    cursor: not-allowed;
    ${(props) => (props._disabled ? props._disabled : null)}
  }
`;
