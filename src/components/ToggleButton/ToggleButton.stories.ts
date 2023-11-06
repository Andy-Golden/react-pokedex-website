import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "MyUI/ToggleButton",
  component: ToggleButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Primary: Story = {
  args: {
    className: "",
    onChange: () => {},
  },
};
