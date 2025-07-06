import type { Meta, StoryObj } from '@storybook/react';
import ThemeProviderWrapper from '@app/components/ui/ThemeProviderWrapper';

const meta: Meta<typeof ThemeProviderWrapper> = {
  title: 'ui/ThemeProviderWrapper',
  component: ThemeProviderWrapper,
};
export default meta;

export const Default: StoryObj<typeof ThemeProviderWrapper> = {
  render: () => (
    <ThemeProviderWrapper>
      <div className="p-4">Content</div>
    </ThemeProviderWrapper>
  ),
};
