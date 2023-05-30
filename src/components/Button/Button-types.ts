import { HTMLAttributes, ReactNode } from "react";
import { Size } from "../theme/theme-enum";
import { CSSProp } from "styled-components";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "text" | "circle" | ButtonVariant;
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large" | Size;
  _hover?: CSSProp;
  _active?: CSSProp;
  _focus?: CSSProp;
  _disabled?: CSSProp;
};

export enum ButtonVariant {
  primary = "primary",
  ghost = "ghost",
  text = "text",
  circle = "circle",
}
