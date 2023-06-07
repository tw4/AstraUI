import { HTMLAttributes, ReactNode } from "react";
import { ElementProps } from "../../types";
import {
  ColorProps,
  SizeProps,
  SpaceProps,
  TypographyProps,
} from "styled-system";

export interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    ElementProps,
    Omit<ColorProps, "color">,
    TypographyProps,
    SizeProps,
    SpaceProps {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  variant?: "primary" | "ghost";
}
