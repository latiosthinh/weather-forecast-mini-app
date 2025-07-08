import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card } from "@/core-ui/Card";
import "@/app/globals.css";

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
	render: (args) => (
		<div className="w-full flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Card {...args} />
		</div>
	),
};

export const WithPadding: Story = {
	args: {
		children: "Card with extra padding",
		className: "p-8",
	},
	render: (args) => (
		<div className="w-full flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Card {...args} />
		</div>
	),
}; 