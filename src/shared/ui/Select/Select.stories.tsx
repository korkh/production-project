import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Choose value",
    options: [
      { value: "111", content: "First value" },
      { value: "222", content: "Second value" },
      { value: "333", content: "Third value" },
    ],
  },
};

export const DarkSelect: Story = {
  args: {
    label: "Choose value",
    options: [
      { value: "111", content: "First value" },
      { value: "222", content: "Second value" },
      { value: "333", content: "Third value" },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
