import { Theme } from "@/app/providers/ThemeProvider";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";

const meta = {
  title: "features/ArticleRating",
  component: ArticleRating,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          user: {
            authData: { id: "1" },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ArticleRating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { articleId: "1" },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        mode: "no-cors",
        response: [{rate: 4}],
      },
    ],
  },
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          user: {
            authData: { id: "1" },
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: { articleId: "1" },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        mode: "no-cors",
        response: [{ rate: 4 }],
      },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const WithoutRate: Story = {
  args: { articleId: "1" },
  parameters: {
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: "GET",
        status: 200,
        response: [],
      },
    ],
  },
};
