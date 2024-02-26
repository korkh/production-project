import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleSortField } from "../../model/types/article";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleSortSelector } from "./ArticleSortSelector";

const meta = {
  title: "entities/ArticleSortSelector",
  component: ArticleSortSelector,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    sort: ArticleSortField.CREATED,
    order: "desc",
    onChangeOrder: () => action("onChangeOrder"),
    onChangeSort: () => action("onChangeSort"),
  },
  argTypes: {},
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
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
