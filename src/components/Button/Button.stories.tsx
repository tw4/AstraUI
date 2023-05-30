import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { ButtonVariant } from "./Button-types";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const tinted = Template.bind({});
tinted.args = {
  children: "Button",
  variant: ButtonVariant.tinted,
};

export const plain = Template.bind({});
plain.args = {
  children: "Button",
  variant: ButtonVariant.plain,
};

export const disable = Template.bind({});
disable.args = {
  children: "Button",
  variant: ButtonVariant.disable,
};

<Button variant="disable">test</Button>;
