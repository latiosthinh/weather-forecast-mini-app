import type { Meta, StoryObj } from "@storybook/nextjs";
import { useState } from "react";
import { Select } from "@/core-ui/Select";
import "@/app/globals.css";

const meta: Meta<typeof Select> = {
	title: "Core UI/Select",
	component: Select,
	tags: ["autodocs"],
	argTypes: {
		value: { control: "text" },
		options: { control: "object" },
		onChange: { action: "changed" },
	},
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: (args) => {
		const [value, setValue] = useState(args.value ?? "apple");
		return (
			<div className="w-full flex flex-col justify-center items-center min-h-[200px] bg-gradient p-4">
				<Select
					{...args}
					value={value}
					onChange={setValue}
				/>
				<div className="mt-2 text-sm text-white">Selected: {String(value)}</div>
			</div>
		);
	},
	args: {
		value: "apple",
		options: [
			{ label: "Apple", value: "apple" },
			{ label: "Banana", value: "banana" },
			{ label: "Orange", value: "orange" },
			{ label: "Grape", value: "grape" },
		],
	},
}; 