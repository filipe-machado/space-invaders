import type { Meta, StoryObj } from "@storybook/react";
import {
  _10PointsCreature,
  _20PointsCreature,
  _30PointsCreature,
  _MysteryCreature,
} from "../../components/organisms/Creatures";

const meta = {
  title: "Organisms/Creatures",
  component: _10PointsCreature,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof _10PointsCreature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const __10PointsCreature: Story = {
  args: {},
};

export const __20PointsCreature: Story = {
  args: {},
  render: () => _20PointsCreature(),
};
export const __30PointsCreature: Story = {
  args: {},
  render: () => _30PointsCreature(),
};
export const __MysteryCreature: Story = {
  args: {},
  render: () => _MysteryCreature(),
};
