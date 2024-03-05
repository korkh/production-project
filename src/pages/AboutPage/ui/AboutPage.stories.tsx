import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import AboutPage from "./AboutPage";

const meta = {
  title: "pages/AboutPage",
  component: AboutPage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof AboutPage>;

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
