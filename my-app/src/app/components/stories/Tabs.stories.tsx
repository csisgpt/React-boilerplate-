import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '@app/components/navigation/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'navigation/Tabs',
  component: Tabs,
};
export default meta;

export const Primary: StoryObj<typeof Tabs> = {
  args: {
    items: [
      { key: 'one', label: 'One', content: <div>One content</div> },
      { key: 'two', label: 'Two', content: <div>Two content</div> },
    ],
  },
};
