import type { Meta, StoryObj } from "@storybook/react";

import SelectMenu from "./SelectMenu";

const meta: Meta<typeof SelectMenu> = {
  component: SelectMenu,
};

export default meta;
type Story = StoryObj<typeof SelectMenu>;

export const FirstStory: Story = {
  args: {
    className: "",
    choices: ["Option 1", "Option 2", "Option 3", "Option 4"],
    indexFilterOption: 0,
    setIndexFilterOption: (index: number) => {},
  },
};
