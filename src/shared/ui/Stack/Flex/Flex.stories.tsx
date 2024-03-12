import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

const meta = {
  title: "shared/Stack/Flex",
  component: Flex,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
  },
};

export const RowGap4: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
    gap: "4",
  },
};

export const RowGap8: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
    gap: "8",
  },
};

export const RowGap16: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
    gap: "16",
  },
};

export const Column: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
  },
};

export const ColumnGap4: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
    gap: "4",
  },
};

export const ColumnGap8: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
    gap: "8",
  },
};

export const ColumnGap16: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
    gap: "16",
  },
};

export const ColumnAlignCenter: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
    align: "center",
  },
};

export const ColumnAlignFlexStart: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
    align: "start",
  },
};

export const ColumnAlignFlexEnd: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "column",
    align: "end",
  },
};

export const RowFlexJustifyCenter: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
    justify: "center",
  },
};

export const RowFlexJustifyStart: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
    justify: "start",
  },
};

export const RowFlexJustifyBetween: Story = {
  args: {
    children: (
      <>
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Fourth</div>
      </>
    ),
    direction: "row",
    justify: "between",
  },
};
