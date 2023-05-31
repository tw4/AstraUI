import { HTMLAttributes, ReactNode } from "react";
import { Size } from "../theme/theme-enum";
import { CSSObject } from "styled-components";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "text" | "circle" | ButtonVariant;
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large" | Size;
  _hover?: CSSObject;
  _active?: CSSObject;
  _focus?: CSSObject;
  _disabled?: CSSObject;
};

export enum ButtonVariant {
  primary = "primary",
  ghost = "ghost",
  text = "text",
  circle = "circle",
}
