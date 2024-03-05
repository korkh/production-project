import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { PageError } from "./PageError";

const meta = {
  title: "widgets/PageError",
  component: PageError,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LIGHT: Story = {
  args: {},
};

export const DARK: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
