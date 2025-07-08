import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "@/core-ui/Input";
import "@/app/globals.css";

const meta: Meta<typeof Input> = {
	title: "Core UI/Input",
	component: Input,
	tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	render: (args) => (
		<div className="w-full flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Input {...args} />
		</div>
	),
	args: {
		placeholder: "Type here...",
	},
};

export const Disabled: Story = {
	args: {
		placeholder: "Disabled input",
		disabled: true,
	},
	render: (args) => (
		<div className="w-full flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Input {...args} />
		</div>
	),
}; 