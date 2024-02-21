import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleView } from "entities/Article/model/types/Article";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleViewSelector } from "./ArticleViewSelector";

const meta = {
  title: "entities/ArticleViewSelector",
  component: ArticleViewSelector,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleViewSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { view: ArticleView.SMALL, onViewClick: action("onViewClick") },
};

export const Dark: Story = {
  args: { view: ArticleView.SMALL, onViewClick: action("onViewClick") },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
