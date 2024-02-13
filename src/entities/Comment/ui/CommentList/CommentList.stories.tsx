import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentList } from "./CommentList";

const meta = {
  title: "entities/CommentList",
  component: CommentList,
  parameters: {
    layout: "centered",
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
