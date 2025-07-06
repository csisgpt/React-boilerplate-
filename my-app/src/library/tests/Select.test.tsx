import { render, fireEvent } from '@testing-library/react';
import { Select } from '../components/inputs/Select';
import { useForm } from 'react-hook-form';
import React from 'react';

describe('Select', () => {
  it('changes value when uncontrolled', () => {
    const { getByRole } = render(
      <Select
        name="s"
        options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
        defaultValue="a"
      />,
    );
    const select = getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('a');
    fireEvent.change(select, { target: { value: 'b' } });
    expect(select.value).toBe('b');
  });

  it('calls onChange in controlled mode', () => {
    const Comp = () => {
      const [val, setVal] = React.useState('a');
      return (
        <Select
          name="c"
          options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
          value={val}
          onChange={v => setVal(v)}
        />
      );
    };
    const { getByRole } = render(<Comp />);
    const select = getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'b' } });
    expect(select.value).toBe('b');
  });

  it('integrates with react-hook-form', () => {
    const form = useForm({ defaultValues: { s: 'a' } });
    const { getByRole } = render(
      <Select
        name="s"
        control={form.control}
        options={[{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }]}
      />,
    );
    const select = getByRole('combobox') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'b' } });
    expect(form.getValues('s')).toBe('b');
  });
});
