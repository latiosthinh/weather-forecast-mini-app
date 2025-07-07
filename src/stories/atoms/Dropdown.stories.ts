import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "@/core-ui/Dropdown";

const meta: Meta<typeof Dropdown> = {
	title: "Core UI/Dropdown",
	component: Dropdown,
	tags: ["autodocs"],
	argTypes: {
		trigger: { control: "text" },
		actions: { control: "object" },
	},
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Story = {
	args: {
		trigger: "Open Dropdown",
		actions: [
			{ label: "Action 1", onClick: () => alert("Action 1") },
			{ label: "Action 2", onClick: () => alert("Action 2") },
		],
	},
}; 