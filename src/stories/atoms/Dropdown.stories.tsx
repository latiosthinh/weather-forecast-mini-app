import type { Meta, StoryObj } from "@storybook/nextjs";
import { Dropdown, DropdownProps } from "@/core-ui/Dropdown";
import "@/app/globals.css";

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
	render: (args: DropdownProps) => {
		return (
			<div className="w-full flex justify-center items-center min-h-[400px] bg-gradient p-4">
				<Dropdown trigger={<button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer">Open Dropdown</button>} actions={args.actions} />
			</div>
		);
	},
}; 