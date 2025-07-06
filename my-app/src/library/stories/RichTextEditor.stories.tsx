import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RichTextEditor } from '../components/inputs/RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'library/Inputs/RichTextEditor',
  component: RichTextEditor,
  args: {
    value: '',
    toolbar: [['bold', 'italic'], ['link']],
  },
  argTypes: {
    value: { control: 'text' },
    modules: { control: 'object' },
    formats: { control: 'object' },
    className: { control: 'text' },
    theme: { control: 'text' },
    toolbar: { control: 'object' },
  },
};
export default meta;

export const Basic: StoryObj<typeof RichTextEditor> = {};

export const CustomToolbar: StoryObj<typeof RichTextEditor> = {
  args: {
    toolbar: [['bold'], ['italic'], [{ list: 'bullet' }]],
  },
};

export const Controlled: StoryObj<typeof RichTextEditor> = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <RichTextEditor {...args} value={value} onChange={setValue} />;
  },
};

export const Uncontrolled: StoryObj<typeof RichTextEditor> = {
  args: {
    value: undefined,
  },
};
