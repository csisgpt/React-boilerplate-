import type { Meta, StoryObj } from '@storybook/react';
import { InputGroup } from '@app/components/ui/InputGroup';

const meta: Meta<typeof InputGroup> = {
  title: 'ui/InputGroup',
  component: InputGroup,
  args: { label: 'Name', htmlFor: 'name' },
};
export default meta;

export const Default: StoryObj<typeof InputGroup> = {
  render: (args) => (
    <InputGroup {...args}>
      <input id="name" className="border p-1" />
    </InputGroup>
  ),
};
