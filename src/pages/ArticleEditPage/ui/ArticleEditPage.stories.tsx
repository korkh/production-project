import type { Meta, StoryObj } from "@storybook/react";

import ArticleEditPage from "./ArticleEditPage";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";


const meta = {
  title: "pages/ArticleEditPage",
  component: ArticleEditPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          user: {
            authData: {
              id: "1",
            },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ArticleEditPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
