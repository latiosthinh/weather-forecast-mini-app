import type { Meta, StoryObj } from '@storybook/nextjs';
import Text from '@/core-ui/Text';
import "@/app/globals.css";

const meta = {
	title: 'Core UI/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: { control: 'text' },
		variant: {
			control: 'select',
			options: ['h1', 'h2', 'p'],
		},
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Title: Story = {
	args: {
		children: 'Title',
		variant: 'h1',
	},
	render: (args) => (
		<div className="w-screen flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Text {...args} />
		</div>
	),
};

export const Subtitle: Story = {
	args: {
		children: 'Subtitle',
		variant: 'h2',
	},
	render: (args) => (
		<div className="w-screen flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Text {...args} />
		</div>
	),
};

export const NormalText: Story = {
	args: {
		children: 'Normal Text',
		variant: 'p',
	},
	render: (args) => (
		<div className="w-screen flex justify-center items-center min-h-[200px] bg-gradient p-4">
			<Text {...args} />
		</div>
	),
};