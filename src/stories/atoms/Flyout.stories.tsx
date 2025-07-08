import { Flyout } from "@/core-ui/Flyout";
import { useFlyoutStore } from "@/store/menuSettingsStore";
import type { Meta, StoryObj } from "@storybook/react";
import "@/app/globals.css";

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
	render: (args) => {
		const { openFlyout, closeFlyout } = useFlyoutStore();
		return (
			<div>
				<button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={openFlyout}>Open Flyout</button>
				<Flyout>
					<div className="p-4">
						<p>This is a flyout content.</p>
					</div>
				</Flyout>
			</div>
		);
	},
};