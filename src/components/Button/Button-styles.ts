import { ThemePrimaryColor } from "../theme/theme";
import { ButtonProps, ButtonVariant } from "./Button-types";
import { FontSizeValue, Size, SizeValue } from "../theme/theme-enum";
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
    &:active {
      outline-style: solid;
      outline-color: ${ThemePrimaryColor.default};
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
    border: 1px solid ${ThemePrimaryColor.default};
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
    &:active {
      outline-style: solid;
      outline-color: ${ThemePrimaryColor.focus};
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
    &:active {
      border-color: ${ThemePrimaryColor.focus};
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
    &:active {
      outline-style: solid;
      outline-color: ${ThemePrimaryColor.focus};
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
  padding: ${(props) =>
    props.size && props.size === Size.small
      ? SizeValue.small
      : props.size === Size.medium
      ? SizeValue.medium
      : props.size === Size.large
      ? SizeValue.large
      : SizeValue.small};
  font-size: ${(props) =>
    props.size && props.size === Size.small
      ? FontSizeValue.small
      : props.size === Size.medium
      ? FontSizeValue.medium
      : props.size === Size.large
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
`;
