import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { ArticleType } from "../../../entities/Article/model/consts/consts";

import { ArticleTypeTabs } from "./ArticleTypeTabs";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "entities/Article/ArticleTypeTabs",
  component: ArticleTypeTabs,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    value: ArticleType.ALL,
    onChangeType: action("onChangeType"),
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {},
};

export const AllDark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const IT: Story = {
  args: { value: ArticleType.IT },
};

export const Economics: Story = {
  args: { value: ArticleType.ECONOMICS },
};

export const Scinece: Story = {
  args: { value: ArticleType.SCIENCE },
};
