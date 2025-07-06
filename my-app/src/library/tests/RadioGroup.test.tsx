import { render, fireEvent } from '@testing-library/react';
import { RadioGroup } from '../components/inputs/RadioGroup';
import { useForm } from 'react-hook-form';
import React from 'react';

describe('RadioGroup', () => {
  it('changes selection', () => {
    const { getAllByRole } = render(
      <RadioGroup
        name="r"
        options={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
        ]}
        defaultValue="a"
      />,
    );
    const radios = getAllByRole('radio') as HTMLInputElement[];
    expect(radios[0].checked).toBe(true);
    fireEvent.click(radios[1]);
    expect(radios[1].checked).toBe(true);
  });

  it('works with react-hook-form', () => {
    const form = useForm({ defaultValues: { r: 'a' } });
    const { getAllByRole } = render(
      <RadioGroup
        name="r"
        control={form.control}
        options={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
        ]}
      />,
    );
    const radios = getAllByRole('radio') as HTMLInputElement[];
    fireEvent.click(radios[1]);
    expect(form.getValues('r')).toBe('b');
  });
});
