import type { Meta, StoryObj } from "@storybook/react";

import { ProfileCard } from "./ProfileCard";

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/storybook.jpg";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
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
} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: {
      userName: "admin",
      age: 22,
      country: Country.Norway,
      lastName: "Hansen",
      firstname: "Peter",
      city: "Oslo",
      currency: Currency.USD,
      avatar,
    },
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const withErrorDark: Story = {
  args: { error: "true" },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
