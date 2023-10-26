import type { Meta, StoryObj } from "@storybook/react";

import PokeCard from "./PokeCard";

const meta: Meta<typeof PokeCard> = {
  title: "MyUI/PokeCard",
  component: PokeCard,
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
type Story = StoryObj<typeof PokeCard>;

export const Primary: Story = {
  args: {
    id: 1,
    name: "Bulbasaur",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
};
