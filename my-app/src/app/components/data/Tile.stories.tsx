import type { Meta, StoryObj } from '@storybook/react';
import { Tile } from './Tile';

const meta: Meta<typeof Tile> = {
  title: 'data/Tile',
  component: Tile,
  args: {
    children: 'Tile content',
    clickable: true,
  },
};
export default meta;

export const Default: StoryObj<typeof Tile> = {};
