## Storybook

Example:

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { ButtonSize } from "./consts/ButtonSize";
import { ButtonTheme } from "./consts/ButtonTheme";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { children: ">" },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: "TEXT" },
};

export const Clear: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.OUTLINE,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "TEXT",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareSizeL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeXL: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const ClearInvertedDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR_INVERTED,
  },
  decorators: [
    (Story) => (
      <ThemeDecorator theme={Theme.DARK}>
        <Story />
      </ThemeDecorator>
    ),
  ],
};

export const Disabled: Story = {
  args: {
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
```
