import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button } from "../../../Button/Button";
import { Popover } from "./Popover";

const meta = {
  title: "shared/Popups/Popover",
  component: Popover,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: [
      <a href="asdasd" key="1">
        Link1
      </a>,
      <a href="asdasd1" key="2">
        Link2
      </a>,
      <a href="asdasd2" key="3">
        Link3
      </a>,
    ],
    direction: "bottom right",
    trigger: <Button>Open</Button>,
  },
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof Popover>;

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
