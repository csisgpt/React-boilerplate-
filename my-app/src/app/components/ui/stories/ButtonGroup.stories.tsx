import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup } from '@app/components/ui/ButtonGroup';

const meta: Meta<typeof ButtonGroup> = {
  title: 'ui/ButtonGroup',
  component: ButtonGroup,
  args: { orientation: 'horizontal' },
};
export default meta;

export const Default: StoryObj<typeof ButtonGroup> = {
  render: (args) => (
    <ButtonGroup {...args}>
      <button className="bg-blue-500 text-white px-2">One</button>
      <button className="bg-blue-500 text-white px-2">Two</button>
    </ButtonGroup>
  ),
};
