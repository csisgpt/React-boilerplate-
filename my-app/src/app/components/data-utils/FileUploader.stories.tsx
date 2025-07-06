import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader, Props as FileUploaderProps } from './FileUploader';

const meta: Meta<FileUploaderProps> = {
  title: 'data-utils/FileUploader',
  component: FileUploader,
  args: { name: 'files' },
};
export default meta;

type Story = StoryObj<FileUploaderProps>;

export const Default: Story = {};
