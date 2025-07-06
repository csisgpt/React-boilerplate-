import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundary } from '@app/components/ui/ErrorBoundary';

const meta: Meta<typeof ErrorBoundary> = {
  title: 'ui/ErrorBoundary',
  component: ErrorBoundary,
  args: { fallback: <div>Error!</div> },
};
export default meta;

export const Default: StoryObj<typeof ErrorBoundary> = {
  render: (args) => (
    <ErrorBoundary {...args}>
      <div>Child</div>
    </ErrorBoundary>
  ),
};
