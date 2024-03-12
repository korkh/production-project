import type { Meta, StoryObj } from "@storybook/react";

import { ArticleBlockType } from "../../model/consts/consts";

import ArticleCodeBlockComponent from "./ArticleCodeBlockComponent";

const meta = {
  title: "entities/Article/Blocks/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      id: "1",
      type: ArticleBlockType.CODE,
      code: "TESTING CODE HERE",
    },
  },
};
