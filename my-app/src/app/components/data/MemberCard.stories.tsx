import type { Meta, StoryObj } from '@storybook/react';
import { MemberCard } from './MemberCard';

const meta: Meta<typeof MemberCard> = {
  title: 'data/MemberCard',
  component: MemberCard,
  args: { children: 'MemberCard' },
};
export default meta;
export const Default: StoryObj<typeof MemberCard> = {};
