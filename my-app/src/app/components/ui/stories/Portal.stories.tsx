import type { Meta, StoryObj } from '@storybook/react';
import { Portal } from '@app/components/ui/Portal';

const meta: Meta<typeof Portal> = {
  title: 'ui/Portal',
  component: Portal,
};
export default meta;

export const Default: StoryObj<typeof Portal> = {
  render: () => (
    <Portal>
      <div className="p-4 bg-gray-200">Portal Content</div>
    </Portal>
  ),
};
