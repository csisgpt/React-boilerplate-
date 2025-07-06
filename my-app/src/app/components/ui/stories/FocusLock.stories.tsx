import type { Meta, StoryObj } from '@storybook/react';
import { FocusLock } from '@app/components/ui/FocusLock';

const meta: Meta<typeof FocusLock> = {
  title: 'ui/FocusLock',
  component: FocusLock,
};
export default meta;

export const Default: StoryObj<typeof FocusLock> = {
  render: () => (
    <FocusLock>
      <button>Focusable</button>
    </FocusLock>
  ),
};
