import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={undefined}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const DARK: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={undefined}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
