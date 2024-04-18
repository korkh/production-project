import type { Meta, StoryObj } from "@storybook/react";

import { CommentCard } from "./CommentCard";

import ThemeDecorator from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/shared/const/Theme";
import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import NewDesignDecorator from "@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator";

const meta = {
	title: "entities/Comment/CommentCard",
	component: CommentCard,
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
} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		comment: {
			id: "1",
			text: "hello world",
			user: { id: "1", username: "Peter" },
		},
	},
};

export const PrimaryRedesigned: Story = {
	args: {
		comment: {
			id: "1",
			text: "hello world",
			user: { id: "1", username: "Peter" },
		},
	},
	decorators: [
		(Story) => (
			<NewDesignDecorator>
				<div style={{ padding: 10 }}>
					<Story />
				</div>
			</NewDesignDecorator>
		),
	],
};

export const Dark: Story = {
	args: {
		comment: {
			id: "1",
			text: "hello world",
			user: { id: "1", username: "Peter" },
		},
	},
	decorators: [
		(Story) => (
			<ThemeDecorator theme={Theme.DARK}>
				<div style={{ padding: 10 }}>
					<Story />
				</div>
			</ThemeDecorator>
		),
	],
};
