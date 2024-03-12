import type { Meta, StoryObj } from "@storybook/react";

import { CommentList } from "./CommentList";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "entities/Comment/CommentList",
  component: CommentList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comments: [
      {
        id: "1",
        text: "hello world",
        user: { id: "1", username: "Peter" },
      },
      {
        id: "2",
        text: "Greetings",
        user: { id: "2", username: "Bob" },
      },
    ],
  },
};

export const Dark: Story = {
  args: {
    comments: [
      {
        id: "1",
        text: "hello world",
        user: { id: "1", username: "Peter" },
      },
      {
        id: "2",
        text: "Greetings",
        user: { id: "2", username: "Bob" },
      },
    ],
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <div style={{ padding: 10 }}>
          <Story />
        </div>
      </ThemeDecorator>
    ),
  ],
};

export const Loading: Story = {
  args: {
    comments: [],
    isLoading: true,
  },
};
