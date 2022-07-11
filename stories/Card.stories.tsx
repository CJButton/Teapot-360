import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "../components/Card";

export default {
  title: "Viewer/Components/Card",
  component: Card,
  parameters: {
    layout: "padded",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card frameNumber={1} />
);

export const Default = Template.bind({});
Default.args = {};
