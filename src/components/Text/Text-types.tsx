import { HTMLAttributes } from "react";
import { ElementProps } from "../../types";
import { ColorProps, SpaceProps, TypographyProps } from "styled-system";
import { StyledProps } from "styled-components";

type ModifiedStyledProps = Omit<StyledProps<any>, "color">;

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    ElementProps,
    TypographyProps,
    Omit<ColorProps, "color">,
    ModifiedStyledProps,
    SpaceProps {}
