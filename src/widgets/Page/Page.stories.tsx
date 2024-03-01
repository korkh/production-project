import type { Meta, StoryObj } from "@storybook/react";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Page } from "./Page";

const meta = {
  title: "widgets/Page",
  component: Page,
  parameters: {
    layout: "fulscreen",
  },
  tags: ["autodocs"],
  args: { children: ">" },
  argTypes: {},
} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
};
