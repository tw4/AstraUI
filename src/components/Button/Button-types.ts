import { CSSProperties, HTMLAttributes, ReactNode } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant?: "filled" | "tinted" | "plain" | "disable" | ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
  size?: "small" | "medium" | "large" | ButtonSize;
  sx?: CSSProperties;
};

export enum ButtonVariant {
  filled = "filled",
  tinted = "tinted",
  plain = "plain",
  disable = "disable",
}

export enum ButtonSize {
  small = "small",
  medium = "medium",
  large = "large",
}
