import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "shared/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { placeholder: "Type text", value: "123123" },
  argTypes: {
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    autofocus: { control: "boolean" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
