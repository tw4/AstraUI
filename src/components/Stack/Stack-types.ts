import { HTMLAttributes, ReactNode } from "react";
import { ElementProps } from "../../types";

export type StackProps = HTMLAttributes<HTMLDivElement> &
  ElementProps & {
    children?: ReactNode;
    direction?: "row" | "column";
    spacingY?: string;
    spacingX?: string;
  };
