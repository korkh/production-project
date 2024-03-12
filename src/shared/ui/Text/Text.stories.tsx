import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";
import { TextSize, TextTheme } from "./consts/TextConsts";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
};

export const Error: Story = {
  args: {
    text: "Description Description Description Description",
    title: "Title lorem ipsun",
    theme: TextTheme.ERROR,
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Description Description Description Description",
  },
};

export const SizeS: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    size: TextSize.S,
  },
};

export const SizeM: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
    size: TextSize.L,
  },
};

export const PrimaryDark: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description Description",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const OnlyTitleDark: Story = {
  args: {
    title: "Title lorem ipsun",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const OnlyTiOnlyTextDarktleDark: Story = {
  args: {
    text: "Description Description Description Description",
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
