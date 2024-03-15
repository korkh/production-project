import type { Meta, StoryObj } from "@storybook/react";

import { AppLink } from "./AppLink";
import { AppLinkTheme } from "./consts/AppLinkTheme";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { children: "TEXT", to: "/" },
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
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
