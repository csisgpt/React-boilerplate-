import type { Meta, StoryObj } from '@storybook/react';
import { DataLoader } from './DataLoader';

const meta: Meta<typeof DataLoader> = {
  title: 'global/DataLoader',
  component: DataLoader,
  args: {
    loader: async () => <div>Loaded</div>,
  },
};
export default meta;
export const Default: StoryObj<typeof DataLoader> = {};
