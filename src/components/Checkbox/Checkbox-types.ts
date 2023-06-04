import { HTMLAttributes } from "react";
import { ElementProps } from "../../types";
import { DefaultColorKey } from "../../theme/theme";

export interface CheckboxProps
  extends HTMLAttributes<HTMLInputElement>,
    ElementProps {
  disabled?: boolean;
  colorScheme?:
    | "purple"
    | "green"
    | "red"
    | "orange"
    | "yellow"
    | DefaultColorKey;
}
