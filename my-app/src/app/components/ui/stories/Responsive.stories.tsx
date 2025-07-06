import type { Meta, StoryObj } from '@storybook/react';
import { Responsive } from '@app/components/ui/Responsive';

const meta: Meta<typeof Responsive> = {
  title: 'ui/Responsive',
  component: Responsive,
  args: { showAt: 'sm' },
};
export default meta;

export const Default: StoryObj<typeof Responsive> = {
  render: (args) => (
    <Responsive {...args}>
      <div className="p-2 bg-gray-200">Responsive Content</div>
    </Responsive>
  ),
};
