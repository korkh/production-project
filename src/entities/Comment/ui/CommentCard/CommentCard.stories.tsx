import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CommentCard } from "./CommentCard";

const meta = {
  title: "entities/CommentCard",
  component: CommentCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    comment: {
      id: "1",
      text: "hello world",
      user: { id: "1", username: "Peter" },
    },
  },
};

export const Dark: Story = {
  args: {
    comment: {
      id: "1",
      text: "hello world",
      user: { id: "1", username: "Peter" },
    },
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
