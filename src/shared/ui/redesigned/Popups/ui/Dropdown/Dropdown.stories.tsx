import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../Button/Button";

import { Dropdown } from "./Dropdown";

import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import { LIST_ITEMS } from "@/shared/const/storyiesConsts";



const meta = {
  title: "shared/Popups/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    items: LIST_ITEMS.items,
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
} satisfies Meta<typeof Dropdown>;

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
