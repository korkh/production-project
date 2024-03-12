import type { Meta, StoryObj } from "@storybook/react";

import { ArticleDetailsComments } from "./ArticleDetailsComments";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";


const meta = {
  title:
    "pages/ArticleDetailsPage/ArticleDetailsComments/ArticleDetailsComments",
  component: ArticleDetailsComments,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { id: "1" },
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ArticleDetailsComments>;

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
