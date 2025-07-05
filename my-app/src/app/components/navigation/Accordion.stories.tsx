import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'navigation/Accordion',
  component: Accordion,
  args: { children: 'Accordion' },
};
export default meta;
export const Default: StoryObj<typeof Accordion> = {};
