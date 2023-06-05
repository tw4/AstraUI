import { SpaceProps, ColorProps } from "styled-system";
import { ElementProps } from "../../types";
import { HTMLAttributes } from "react";

export interface BoxProps
  extends HTMLAttributes<HTMLDivElement>,
    SpaceProps,
    Omit<ColorProps, "color">,
    ElementProps {}
