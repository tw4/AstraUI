import { HTMLAttributes, ReactNode } from "react";
import { SizeKey } from "../../theme/theme-enum";
import { ElementProps } from "../../types";
import { DefaultColorKey } from "../../theme/theme";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ElementProps & {
    colorScheme?:
      | "purple"
      | "green"
      | "red"
      | "orange"
      | "yellow"
      | DefaultColorKey;
    variant?: "primary" | "ghost" | "text" | "circle" | ButtonVariant;
    disabled?: boolean;
    children: ReactNode;
    size?: "small" | "medium" | "large" | SizeKey;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };

export enum ButtonVariant {
  primary = "primary",
  ghost = "ghost",
  text = "text",
  circle = "circle",
}
