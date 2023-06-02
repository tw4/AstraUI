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
  sx: {
    height: "10vh",
    backgroundColor: "lightgray",
    padding: "10px",
  },
  children: (
    <>
      <Button>btn 1</Button>
      <Button>btn 2</Button>
    </>
  ),
};
