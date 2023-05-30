import { HTMLAttributes, ReactNode } from "react";
import { Size } from "../theme/theme-enum";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "text" | "circle" | ButtonVariant;
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large" | Size;
};

export enum ButtonVariant {
  primary = "primary",
  ghost = "ghost",
  text = "text",
  circle = "circle",
}
