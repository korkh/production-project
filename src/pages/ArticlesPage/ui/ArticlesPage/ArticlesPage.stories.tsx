import type { Meta, StoryObj } from "@storybook/react";

import ArticlesPage from "./ArticlesPage";

import { Article, ArticleView } from "@/entities/Article";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ARTICLES } from "@/shared/const/storyiesConsts";

const meta = {
  title: "pages/ArticlesPage/ArticlesPage",
  component: ArticlesPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<typeof ArticlesPage>;

export default meta;

type Story = StoryObj<typeof meta>;

interface ArticleEntity {
  [id: string]: Article;
}

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator
        state={{
          articlesPage: {
            isLoading: false,
            error: undefined,
            view: ArticleView.BIG,
            ids: ARTICLES.map((article) => article.id),
            entities: ARTICLES.reduce((acc, article) => {
              acc[article.id] = article;
              return acc;
            }, {} as ArticleEntity),
            //pagination
            page: 1,
            limit: 4,
            hasMore: true,
          },
        }}
      >
        <Story />
      </StoreDecorator>
    ),
  ],
};
