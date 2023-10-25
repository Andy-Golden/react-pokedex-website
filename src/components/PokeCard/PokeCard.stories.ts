import type { Meta, StoryObj } from "@storybook/react";

import PokeCard from "./PokeCard";

const meta: Meta<typeof PokeCard> = {
  component: PokeCard,
};

export default meta;
type Story = StoryObj<typeof PokeCard>;

export const FirstStory: Story = {
  args: {
    id: 1,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
};
