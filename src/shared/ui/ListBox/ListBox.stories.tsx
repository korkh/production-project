import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ListBox } from "./ListBox";

const meta = {
  title: "shared/ListBox",
  component: ListBox,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    value: "Custom List",
    items: [
      { content: "first", value: "First" },
      { content: "second", value: "Second" },
      { content: "third", value: "Third" },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { },
};

export const TopLeft: Story = {
  args: { direction: "top left" },
};

export const TopRight: Story = {
  args: {
    direction: "top right",
  },
};

export const BottomLeft: Story = {
  args: {
    direction: "bottom left",
  },
};

export const BottomRight: Story = {
  args: {
    direction: "bottom right",
  },
};

export const PrimaryDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const PrimaryOrange: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.ORANGE}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
