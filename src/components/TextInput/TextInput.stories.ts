import type { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "MyUI/TextInput",
  component: TextInput,
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
type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    type: "text",
    placeholder: "Enter your text",
  },
};
