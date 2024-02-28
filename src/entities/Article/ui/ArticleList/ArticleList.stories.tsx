import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleView } from "../../model/types/article";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ARTICLES } from "shared/const/storyiesConsts";
import { ArticleList } from "./ArticleList";

const meta = {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingBig: Story = {
  args: { articles: [], isLoading: true, view: ArticleView.BIG },
};

export const LoadingBigDark: Story = {
  args: { articles: [], isLoading: true, view: ArticleView.BIG },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};

export const LoadingSmall: Story = {
  args: { articles: [], isLoading: true, view: ArticleView.SMALL },
};

export const LoadingSmallDark: Story = {
  args: { articles: [], isLoading: true, view: ArticleView.SMALL },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};

export const ListSmall: Story = {
  args: {
    articles: ARTICLES,
    isLoading: false,
    view: ArticleView.SMALL,
  },
};

export const ListSmallDark: Story = {
  args: {
    articles: ARTICLES,
    isLoading: false,
    view: ArticleView.SMALL,
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};

export const ListBig: Story = {
  args: {
    articles: ARTICLES,
    isLoading: false,
    view: ArticleView.SMALL,
  },
};

export const ListBigDark: Story = {
  args: {
    articles: ARTICLES,
    isLoading: false,
    view: ArticleView.SMALL,
  },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
