import type { Meta, StoryObj } from "@storybook/react";

import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "MyUI/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Primary: Story = {
  args: {},
};
