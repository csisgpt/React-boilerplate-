import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ColorPicker } from './ColorPicker';

const meta: Meta<typeof ColorPicker> = {
  title: 'theme/ColorPicker',
  component: ColorPicker,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  render: (args) => {
    const [val, setVal] = useState(args.value);
    return <ColorPicker value={val} onChange={setVal} />;
  },
  args: { value: '#1d4ed8' },
};
export default meta;
export const Default: StoryObj<typeof ColorPicker> = {};
