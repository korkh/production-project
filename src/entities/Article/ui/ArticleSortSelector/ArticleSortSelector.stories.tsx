import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import { ArticleSortField } from "../../model/consts/consts";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { ArticleSortSelector } from "./ArticleSortSelector";

const meta = {
  title: "entities/Article/ArticleSortSelector",
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
