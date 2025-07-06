import type { Meta, StoryObj } from '@storybook/react';
import { PageTemplate } from '@app/components/layout/PageTemplate';

const meta: Meta<typeof PageTemplate> = {
  title: 'layout/PageTemplate',
  component: PageTemplate,
};
export default meta;

export const Primary: StoryObj<typeof PageTemplate> = {
  args: {
    title: 'Page',
    children: 'Content',
  },
};
