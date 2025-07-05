import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader } from './FileUploader';

const meta: Meta<typeof FileUploader> = {
  title: 'data-utils/FileUploader',
  component: FileUploader,
  args: { children: 'FileUploader' },
};
export default meta;
export const Default: StoryObj<typeof FileUploader> = {};
