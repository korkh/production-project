import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ProfilePage from "./ProfilePage";
import avatar from "@/shared/assets/tests/storybook.jpg";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  parameters: {
    layout: "fullscreen",
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
      <StoreDecorator
        state={{
          profile: {
            form: {
              username: "admin",
              age: 22,
              country: Country.Norway,
              lastName: "Hansen",
              firstName: "Peter",
              city: "Oslo",
              currency: Currency.NOK,
              avatar,
            },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const DARK: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          profile: {
            form: {
              username: "admin",
              age: 22,
              country: Country.Norway,
              lastName: "Hansen",
              firstName: "Peter",
              city: "Oslo",
              currency: Currency.NOK,
              avatar,
            },
          },
        }}
      >
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
