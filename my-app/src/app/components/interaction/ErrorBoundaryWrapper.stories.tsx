import type { Meta, StoryObj } from '@storybook/react';
import { ErrorBoundaryWrapper } from './ErrorBoundaryWrapper';

const meta: Meta<typeof ErrorBoundaryWrapper> = {
  title: 'interaction/ErrorBoundaryWrapper',
  component: ErrorBoundaryWrapper,
  args: { children: 'ErrorBoundaryWrapper' },
};
export default meta;
export const Default: StoryObj<typeof ErrorBoundaryWrapper> = {};
