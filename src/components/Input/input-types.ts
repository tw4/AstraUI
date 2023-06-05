import { HTMLAttributes, ReactNode } from "react";
import { ElementProps } from "../../types";
import { ColorProps } from "styled-system";

export interface InputProps
  extends Omit<HTMLAttributes<HTMLInputElement>, "color">,
    ElementProps,
    Omit<ColorProps, "bg"> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  backgroundColor?: string;
}
