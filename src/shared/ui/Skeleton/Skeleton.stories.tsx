import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Skeleton } from "./Skeleton";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    width: "100%",
    height: 200,
  },
};

export const Circle: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
};

export const NormalDark: Story = {
  args: {
    width: "100%",
    height: 200,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const CircleDark: Story = {
  args: {
    border: "50%",
    width: 100,
    height: 100,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
