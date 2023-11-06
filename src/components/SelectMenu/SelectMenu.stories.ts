import type { Meta, StoryObj } from "@storybook/react";

import SelectMenu from "./SelectMenu";

const meta: Meta<typeof SelectMenu> = {
  title: "MyUI/SelectMenu",
  component: SelectMenu,
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
type Story = StoryObj<typeof SelectMenu>;

export const Primary: Story = {
  args: {
    className: "",
    options: [
      { key: "1", label: "Option 1" },
      { key: "2", label: "Option 2" },
      { key: "3", label: "Option 3" },
      { key: "4", label: "Option 4" },
    ],
  },
};
