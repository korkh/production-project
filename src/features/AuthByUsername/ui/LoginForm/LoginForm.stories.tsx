import type { Meta, StoryObj } from "@storybook/react";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import LoginForm from "./LoginForm";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          loginForm: {
            username: "123",
            password: "asd",
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const withError: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          loginForm: {
            username: "123",
            password: "asd",
            error: "ERROR",
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          loginForm: {
            isLoading: true,
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};
