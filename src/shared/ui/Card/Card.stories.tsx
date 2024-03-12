import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../Text/Text";

import { Card } from "./Card";

const meta = {
  title: "shared/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: ">" },
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: <Text title="test" text="text text" /> },
};
