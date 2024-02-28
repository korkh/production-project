import type { Meta, StoryObj } from "@storybook/react";
import { ArticleBlockType } from "../../model/types/article";
import ArticleImageBlockComponent from "./ArticleImageBlockComponent";

const meta = {
  title: "entities/Article/Blocks/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    block: {
      id: "1",
      type: ArticleBlockType.IMAGE,
      src: "https://th.bing.com/th/id/OIP.hx5kKYwjxlUkkhSPsNdBCQHaHW?rs=1&pid=ImgDetMain",
      title: "IMAGE BLOCK",
    },
  },
};
