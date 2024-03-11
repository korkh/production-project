import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ARTICLES } from "@/shared/const/storyiesConsts";
import withMock from "storybook-addon-mock";
import { ArticleRecommendationsList } from "./ArticleRecommendationsList";

const meta = {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  parameters: {
    layout: "fullscreen",
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: "GET",
        status: 200,
        response: [...ARTICLES],
      },
    ],
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    withMock,
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ArticleRecommendationsList>;

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
