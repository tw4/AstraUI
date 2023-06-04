import { ReactNode } from "react";
import { ElementProps } from "../../types";
import {
  ColorProps,
  FlexboxProps,
  SpaceProps,
  SizeProps,
  GridProps,
} from "styled-system";
import { StyledProps } from "styled-components";

type ModifiedStyledProps = Omit<StyledProps<any>, "color">;
export interface StackProps
  extends ModifiedStyledProps,
    ElementProps,
    ColorProps,
    SpaceProps,
    SizeProps,
    GridProps,
    FlexboxProps {
  spacingY?: string;
  spacingX?: string;
}
