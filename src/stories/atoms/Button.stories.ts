import type { Meta, StoryObj } from '@storybook/nextjs';
import { fn } from 'storybook/test';
import { Button } from '@/core-ui/Button';
import "@/app/globals.css";

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// export const Secondary: Story = {
//   args: {
//     children: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     children: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     children: 'Button',
//   },
// };
