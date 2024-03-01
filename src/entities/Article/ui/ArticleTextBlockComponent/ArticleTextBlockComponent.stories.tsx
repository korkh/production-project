import type { Meta, StoryObj } from "@storybook/react";
import { ArticleBlockType } from "../../model/consts/consts";
import ArticleTextBlockComponent from "./ArticleTextBlockComponent";

const meta = {
  title: "entities/Article/Blocks/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "TEXT BLOCKS",
      paragraphs: [
        "TESTING TEXT BLOCK HERE 1",
        "TESTING TEXT BLOCK HERE 2",
        "TESTING TEXT BLOCK HERE 3",
      ],
    },
  },
};
