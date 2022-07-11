import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Spinner } from "../components/Loader";

export default {
  title: "Viewer/Components/Loader/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner />;

export const SpinningForever = Template.bind({});
SpinningForever.args = {};
