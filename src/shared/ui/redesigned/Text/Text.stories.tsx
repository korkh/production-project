import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
	title: "shared/Text",
	component: Text,
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
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: "Title lorem ipsun",
		text: "Description Description Description Description",
	},
};

export const Error: Story = {
	args: {
		text: "Description Description Description Description",
		title: "Title lorem ipsun",
		variant: "error",
	},
};

export const OnlyTitle: Story = {
	args: {
		title: "Title lorem ipsun",
	},
};

export const OnlyText: Story = {
	args: {
		text: "Description Description Description Description",
	},
};

export const SizeS: Story = {
	args: {
		title: "Title lorem ipsun",
		text: "Description Description Description Description",
		size: "s",
	},
};

export const SizeM: Story = {
	args: {
		title: "Title lorem ipsun",
		text: "Description Description Description Description",
		size: "m",
	},
};

export const SizeL: Story = {
	args: {
		title: "Title lorem ipsun",
		text: "Description Description Description Description",
		size: "l",
	},
};

export const PrimaryDark: Story = {
	args: {
		title: "Title lorem ipsun",
		text: "Description Description Description Description",
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const OnlyTitleDark: Story = {
	args: {
		title: "Title lorem ipsun",
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};

export const OnlyTiOnlyTextDarktleDark: Story = {
	args: {
		text: "Description Description Description Description",
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<Story />
			</ThemeDecorator>
		),
	],
};
