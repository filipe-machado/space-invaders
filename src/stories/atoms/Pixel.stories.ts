import type { Meta, StoryObj } from "@storybook/react";
import Pixel from "../../components/atoms/Pixel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Atoms/Pixel",
  component: Pixel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof Pixel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    color: "black",
  },
};
