import type { Meta, StoryObj } from "@storybook/react";

import PokeType from "./PokeType";

const meta: Meta<typeof PokeType> = {
  title: "MyUI/PokeType",
  component: PokeType,
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
type Story = StoryObj<typeof PokeType>;

export const Primary: Story = {
  args: {
    content: "poke type",
  },
};
