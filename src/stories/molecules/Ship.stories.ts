import type { Meta, StoryObj } from "@storybook/react";
import Ship from "../../components/molecules/Ship";

const meta = {
  title: "Molecules/Ship",
  component: Ship,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    ship: { control: "object" },
    color: { control: "color" },
  },
} satisfies Meta<typeof Ship>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ship: [
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    color: "cyan",
  },
};
