import { HTMLAttributes } from "react";
import { ElementProps } from "../../types";
import { DefaultColorKey } from "../../theme/theme";
import { SpaceProps } from "styled-system";

export interface CheckboxProps
  extends HTMLAttributes<HTMLInputElement>,
    ElementProps,
    SpaceProps {
  disabled?: boolean;
  colorScheme?:
    | "purple"
    | "green"
    | "red"
    | "orange"
    | "yellow"
    | DefaultColorKey;
}
