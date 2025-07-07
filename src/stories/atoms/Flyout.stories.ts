import type { Meta, StoryObj } from "@storybook/react";
import { Flyout } from "@/core-ui/Flyout";

const meta: Meta<typeof Flyout> = {
	title: "Core UI/Flyout",
	component: Flyout,
	tags: ["autodocs"],
	argTypes: {
		side: { control: "select", options: ["left", "right"] },
		children: { control: "text" },
	},
};
export default meta;

type Story = StoryObj<typeof Flyout>;

export const Default: Story = {
	args: {
		side: "left",
		children: "This is a flyout content.",
	},
}; 