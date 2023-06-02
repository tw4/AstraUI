import { HTMLAttributes, ReactNode } from "react";
import { ElementProps } from "../../types";

export type BoxProps = HTMLAttributes<HTMLDivElement> &
  ElementProps & {
    children?: ReactNode;
  };
