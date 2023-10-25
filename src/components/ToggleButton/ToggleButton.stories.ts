import type { Meta, StoryObj } from "@storybook/react";

import ToggleButton from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const FirstStory: Story = {
  args: {
    className: "",
    onChange: () => {},
  },
};
