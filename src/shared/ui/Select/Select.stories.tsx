import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "shared/Select",
  component: Select,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
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
