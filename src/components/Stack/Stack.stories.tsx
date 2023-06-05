import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Stack from "./Stack";
import Button from "../Button/Button";

export default {
  title: "Components/Stack",
  component: Stack,
  tags: ["autodocs"],
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;
export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
    </>
  ),
  bg: "grey",
  p: "10px",
  spacingX: "10px",
};
