import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

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
