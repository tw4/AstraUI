import { HTMLAttributes, ReactNode } from "react";
import { SizeKey } from "../../theme/theme-enum";
import { ElementProps } from "../../types";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ElementProps & {
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
