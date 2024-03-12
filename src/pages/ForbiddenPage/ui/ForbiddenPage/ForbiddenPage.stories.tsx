import type { Meta, StoryObj } from "@storybook/react";

import ForbiddenPage from "./ForbiddenPage";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "pages/ForbiddenPage",
  component: ForbiddenPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof ForbiddenPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
