import { HTMLAttributes } from "react";
import { ElementProps } from "../../types";
import { DefaultColorKey } from "../../theme/theme";

export type CheckboxProps = HTMLAttributes<HTMLInputElement> &
  ElementProps & {
    disabled?: boolean;
    colorScheme?:
      | "purple"
      | "green"
      | "red"
      | "orange"
      | "yellow"
      | DefaultColorKey;
  };
