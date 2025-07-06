import type { Meta, StoryObj } from '@storybook/react';
import { FileUploader, Props } from '../components/inputs/FileUploader';

const meta: Meta<Props> = {
  title: 'library/Inputs/FileUploader',
  component: FileUploader,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    multiple: { control: 'boolean' },
    accept: { control: 'text' },
    className: { control: 'text' },
  },
  args: { name: 'files', label: 'Upload', multiple: false },
};
export default meta;

type Story = StoryObj<Props>;

export const Single: Story = {};
export const Multiple: Story = { args: { multiple: true } };
export const WithCrop: Story = { args: { accept: 'image/*' } };
