import { CSSObject } from "styled-components";

export type ElementProps = {
  _hover?: CSSObject;
  _active?: CSSObject;
  _focus?: CSSObject;
  _disabled?: CSSObject;
  fullWidth?: boolean;
};

export type ColorScheme = {
  default: string;
  hover: string;
  focus: string;
  textLight: string;
  textDark: string;
};
