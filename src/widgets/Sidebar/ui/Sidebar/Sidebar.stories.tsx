import type { Meta, StoryObj } from "@storybook/react";

import { Sidebar } from "./Sidebar";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "widgets/Sidebar/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{ user: { authData: {} } }}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{ user: { authData: {} } }}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};

export const NoAuth: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{ user: {} }}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
