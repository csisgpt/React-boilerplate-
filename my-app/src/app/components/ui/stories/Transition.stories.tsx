import type { Meta, StoryObj } from '@storybook/react';
import { Transition } from '@app/components/ui/Transition';

const meta: Meta<typeof Transition> = {
  title: 'ui/Transition',
  component: Transition,
  args: { type: 'fade' },
};
export default meta;

export const Default: StoryObj<typeof Transition> = {
  render: (args) => (
    <Transition {...args}>
      <div className="p-2 bg-gray-200">Animated</div>
    </Transition>
  ),
};
