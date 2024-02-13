import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import avatar from "shared/assets/tests/storybook.jpg";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ProfileCard } from "./ProfileCard";

const meta = {
  title: "entities/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
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
