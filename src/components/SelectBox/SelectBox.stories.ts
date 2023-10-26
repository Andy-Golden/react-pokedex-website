import type { Meta, StoryObj } from "@storybook/react";

import SelectBox from "./SelectBox";

const meta: Meta<typeof SelectBox> = {
  title: "MyUI/SelectBox",
  component: SelectBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    background: { control: "color" },
    textColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof SelectBox>;

export const Primary: Story = {
  args: {
    className: "",
    options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  },
};
