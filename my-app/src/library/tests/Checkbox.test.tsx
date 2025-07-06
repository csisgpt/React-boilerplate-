import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from '../components/inputs/Checkbox';
import { useForm } from 'react-hook-form';
import React from 'react';

describe('Checkbox', () => {
  it('toggles when uncontrolled', () => {
    const { getByRole } = render(<Checkbox name="c" label="C" defaultValue={false} />);
    const input = getByRole('checkbox') as HTMLInputElement;
    expect(input.checked).toBe(false);
    fireEvent.click(input);
    expect(input.checked).toBe(true);
  });

  it('supports controlled state', () => {
    const Comp = () => {
      const [val, setVal] = React.useState(false);
      return <Checkbox name="c" label="C" value={val} onChange={setVal} />;
    };
    const { getByRole } = render(<Comp />);
    const input = getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(input);
    expect(input.checked).toBe(true);
  });

  it('works with react-hook-form', () => {
    const form = useForm({ defaultValues: { c: false } });
    const { getByRole } = render(<Checkbox name="c" control={form.control} label="C" />);
    const input = getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(input);
    expect(form.getValues('c')).toBe(true);
  });

  it('handles multiple options', () => {
    const { getAllByRole } = render(
      <Checkbox
        name="g"
        multiple
        options={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
        ]}
        defaultValue={[]}
      />,
    );
    const inputs = getAllByRole('checkbox') as HTMLInputElement[];
    fireEvent.click(inputs[0]);
    expect(inputs[0].checked).toBe(true);
  });
});
