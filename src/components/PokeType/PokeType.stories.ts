import type { Meta, StoryObj } from "@storybook/react";

import PokeType from "./PokeType";

const meta: Meta<typeof PokeType> = {
  component: PokeType,
};

export default meta;
type Story = StoryObj<typeof PokeType>;

export const FirstStory: Story = {
  args: {
    content: "poke type",
  },
};
