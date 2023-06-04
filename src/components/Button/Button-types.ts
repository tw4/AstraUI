import { HTMLAttributes, ReactNode } from "react";
import { ElementProps } from "../../types";
import { ColorProps, SizeProps, TypographyProps } from "styled-system";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ElementProps,
    Omit<ColorProps, "color">,
    TypographyProps,
    SizeProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export enum ButtonVariant {
  primary = "primary",
  ghost = "ghost",
  text = "text",
  circle = "circle",
}
