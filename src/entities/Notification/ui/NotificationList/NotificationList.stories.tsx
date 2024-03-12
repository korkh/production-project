import type { Meta, StoryObj } from "@storybook/react";

import NotificationList from "./NotificationList";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import { NOTIFICATIONS } from "@/shared/const/storyiesConsts";


const meta = {
  title: "entities/Notification/NotificationList",
  component: NotificationList,
  parameters: {
    layout: "fullscreen",
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: "GET",
        status: 200,
        response: [...NOTIFICATIONS],
        delay: 1000,
      },
    ],
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
} satisfies Meta<typeof NotificationList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
