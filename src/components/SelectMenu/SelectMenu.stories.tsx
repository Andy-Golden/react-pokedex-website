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
    choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
    indexFilterOption: 0,
    setIndexFilterOption: (index: number) => {},
  },
};
