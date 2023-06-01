import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  defaultValue: "Input",
  onChange: (e) => {
    console.log(e.currentTarget.value);
  },
  placeholder: "input",
};
