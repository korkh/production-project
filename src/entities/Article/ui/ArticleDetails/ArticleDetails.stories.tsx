import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ARTICLES } from "shared/const/storyiesConsts";
import { ArticleDetails } from "./ArticleDetails";

const meta = {
  title: "shared/ArticleDetails",
  component: ArticleDetails,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articleDetails: {
            data: ARTICLES[0],
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articleDetails: {
            data: ARTICLES[0],
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

export const Error: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articleDetails: {
            error: "Error",
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
