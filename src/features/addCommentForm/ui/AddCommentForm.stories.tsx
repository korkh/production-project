import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AddCommentForm from "./AddCommentForm";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: { onSendComment: action("onSendComment") },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};

export const Dark: Story = {
  args: { onSendComment: action("onSendComment") },
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <ThemeDecorator theme={Theme.DARK}>
          <Story />
        </ThemeDecorator>
      </StoreDecorator>
    ),
  ],
};
