import { HTMLAttributes, ReactNode } from "react";
import { ElementProps } from "../../types";
import { DefaultColorKey } from "../../theme/theme";

export type InputProps = HTMLAttributes<HTMLInputElement> &
  ElementProps & {
    colorScheme?:
      | "purple"
      | "green"
      | "red"
      | "orange"
      | "yellow"
      | DefaultColorKey;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };
