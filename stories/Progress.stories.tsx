import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Progress } from "../components/Loader";

export default {
  title: "Viewer/Components/Loader/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => (
  <Progress {...args} />
);

export const Unloaded = Template.bind({});
Unloaded.args = {
  progress: 0,
};

export const HalfwayThere = Template.bind({});
HalfwayThere.args = {
  progress: 0.5,
};

export const FullyLoaded = Template.bind({});
FullyLoaded.args = {
  progress: 1,
};
