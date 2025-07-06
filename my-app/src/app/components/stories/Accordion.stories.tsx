import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@app/components/navigation/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'navigation/Accordion',
  component: Accordion,
};
export default meta;

export const Primary: StoryObj<typeof Accordion> = {
  args: {
    items: [
      { key: 'a', label: 'Section A', content: 'A content' },
      { key: 'b', label: 'Section B', content: 'B content' },
    ],
  },
};
