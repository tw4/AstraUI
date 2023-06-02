import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "./Box";

export default {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;
export const Default = Template.bind({});
Default.args = {
  sx: { height: "10vh", width: "10vw", backgroundColor: "blue" },
};
