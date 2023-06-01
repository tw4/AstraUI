import { ColorScheme } from "../types";
import { DefaultColorKey, DefaultColorValue } from "./theme";

export const ThemePrimaryColor: ColorScheme = {
  default: "#1846C7",
  hover: "#1640B6",
  focus: "#143AA4",
  textLight: "#FFFFFF",
  textDark: "#000000",
};

export const PurpleColorScheme: ColorScheme = {
  default: DefaultColorValue.purple,
  hover: "#7500A5",
  focus: "#560087",
  textLight: "#FFFFFF",
  textDark: "#000000",
};

export const GreenColorScheme: ColorScheme = {
  default: DefaultColorValue.green,
  hover: "#15780C",
  focus: "#0C4F08",
  textLight: "#FFFFFF",
  textDark: "#000000",
};

export const RedColorScheme: ColorScheme = {
  default: DefaultColorValue.red,
  hover: "#A60000",
  focus: "#7A0000",
  textLight: "#FFFFFF",
  textDark: "#000000",
};

export const OrangeColorScheme: ColorScheme = {
  default: DefaultColorValue.orange,
  hover: "#D65200",
  focus: "#934000",
  textLight: "#FFFFFF",
  textDark: "#000000",
};

export const YellowColorScheme: ColorScheme = {
  default: DefaultColorValue.yellow,
  hover: "#C28A00",
  focus: "#825B00",
  textLight: "#FFFFFF",
  textDark: "#000000",
};

export const colorSchemeHandler = (color: any) => {
  switch (color) {
    case DefaultColorKey.green:
      return DefaultColorValue.green;
    case DefaultColorKey.orange:
      return DefaultColorValue.orange;
    case DefaultColorKey.purple:
      return DefaultColorValue.purple;
    case DefaultColorKey.red:
      return DefaultColorValue.red;
    case DefaultColorKey.yellow:
      return DefaultColorKey.yellow;
    default:
      return ThemePrimaryColor.default;
  }
};
