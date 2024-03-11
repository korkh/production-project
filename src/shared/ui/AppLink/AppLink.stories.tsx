import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppLink, AppLinkTheme } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: "TEXT", to: "/" },
  argTypes: {},
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { theme: AppLinkTheme.PRIMARY },
};

export const Secondary: Story = {
  args: { theme: AppLinkTheme.SECONDARY },
};

export const Red: Story = {
  args: { theme: AppLinkTheme.RED },
};

export const PrimaryDark: Story = {
  args: { theme: AppLinkTheme.PRIMARY },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const SecondaryDark: Story = {
  args: { theme: AppLinkTheme.SECONDARY },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const RedDark: Story = {
  args: { theme: AppLinkTheme.RED },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
