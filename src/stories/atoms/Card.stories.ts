import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/core-ui/Card";

const meta: Meta<typeof Card> = {
	title: "Core UI/Card",
	component: Card,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		children: "Default Card",
	},
};

export const WithPadding: Story = {
	args: {
		children: "Card with extra padding",
		className: "p-8",
	},
}; 