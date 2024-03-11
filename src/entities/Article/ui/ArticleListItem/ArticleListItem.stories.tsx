import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import { ArticleView } from "../../model/consts/consts";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ARTICLES } from "@/shared/const/storyiesConsts";
import { ArticleListItem } from "./ArticleListItem";

const meta = {
  title: "entities/Article/ArticleListItem",
  component: ArticleListItem,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BIG: Story = {
  args: { view: ArticleView.BIG, article: ARTICLES[0] },
};

export const BIG_DARK: Story = {
  args: { view: ArticleView.BIG, article: ARTICLES[0] },
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

export const SMALL: Story = {
  args: { view: ArticleView.BIG, article: ARTICLES[0] },
};

export const SMALL_DARK: Story = {
  args: { view: ArticleView.SMALL, article: ARTICLES[0] },
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
