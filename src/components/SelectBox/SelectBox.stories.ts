import type { Meta, StoryObj } from "@storybook/react";

import SelectBox from "./SelectBox";

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const FirstStory: Story = {
  args: {
    className: "",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
};
