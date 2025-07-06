import type { Meta, StoryObj } from '@storybook/react';
import { ScrollLock } from '@app/components/ui/ScrollLock';

const meta: Meta<typeof ScrollLock> = {
  title: 'ui/ScrollLock',
  component: ScrollLock,
};
export default meta;

export const Default: StoryObj<typeof ScrollLock> = {
  render: () => (
    <ScrollLock>
      <div className="p-4">Scroll Locked</div>
    </ScrollLock>
  ),
};
