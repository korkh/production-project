import type { Meta, StoryObj } from "@storybook/react";

import LoginForm from "./LoginForm";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/AuthbyUserName/LoginForm",
  component: LoginForm,
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
