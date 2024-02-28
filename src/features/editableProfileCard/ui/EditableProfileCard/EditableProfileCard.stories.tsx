import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { EditableProfileCard } from "./EditableProfileCard";

const meta = {
  title: "features/editableProfileCard/EditableProfileCard",
  component: EditableProfileCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { id: "1" },
  argTypes: {},
} satisfies Meta<typeof EditableProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
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
