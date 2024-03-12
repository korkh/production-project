import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";
import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "shared/Icon",
  component: Icon,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: { Svg: ProfileIcon },
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Inverted: Story = {
  args: { inverted: true },
};

export const DarkIcon: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const DarkInvertedIcon: Story = {
  args: { inverted: true },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};
