import React, { FC } from "react";
import { CheckboxProps } from "./Checkbox-types";
import { StyledCheckbox } from "./Checkbox-styles";

const Checkbox: FC<CheckboxProps> = ({ ...rest }) => {
  return <StyledCheckbox type="checkbox" {...rest} />;
};

export default Checkbox;
