import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { children: ">" },
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "TEXT" },
};

export const Clear: Story = {
  args: {
    children: "TEXT",
    variant: "clear",
  },
};

export const Outline: Story = {
  args: {
    children: "TEXT",
    variant: "outline",
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "TEXT",
    variant: "outline",
    size: "l",
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "TEXT",
    variant: "outline",
    size: "xl",
  },
};

export const OutlineDark: Story = {
  args: {
    variant: "outline",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    variant: "outline",
    disabled: true,
  },
};
