import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "../../deprecated/Text/Text";

import { Drawer } from "./Drawer";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
	title: "shared/Drawer",
	component: Drawer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	args: {
		children: <Text title="Drawer" text="Drag down to close" />,
		isOpen: true,
	},
	argTypes: {},
	decorators: [
		(Story) => (
			<StoreDecorator state={{}}>
				<Story />
			</StoreDecorator>
		),
	],
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {},
};

export const DarkDrawer: Story = {
	args: {},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};
