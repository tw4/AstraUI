import { HTMLAttributes } from "react";
import { ElementProps } from "../../types";
import { ReactNode } from "react";

export type TextProps = HTMLAttributes<HTMLParagraphElement> &
  ElementProps & {
    children: ReactNode;
    fontsize?: string;
  };
