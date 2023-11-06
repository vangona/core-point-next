import { ParagraphDivider } from '@/components/common/paragraph-divider';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'CorePoint/ParagraphDivider',
  component: ParagraphDivider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ParagraphDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Left: Story = {
  args: {
    variant: 'left',
  },
};

export const Right: Story = {
  args: {
    variant: 'right',
  },
};
