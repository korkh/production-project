import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "@/app/providers/ThemeProvider";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { CountrySelect } from "./CountrySelect";

const meta = {
  title: "entities/Country/CountrySelect",
  component: CountrySelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof CountrySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const DarkSelect: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
