import { fireEvent, render } from '@testing-library/react';
import { MaskedInput } from '../components/inputs/MaskedInput';

describe('MaskedInput', () => {
  it('applies mask pattern', () => {
    const { getByLabelText } = render(
      <MaskedInput maskPattern="###-###" aria-label="m" />,
    );
    const input = getByLabelText('m') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '12345' } });
    expect(input.value).toBe('123-45_');
  });

  it('handles paste input', () => {
    const { getByLabelText } = render(
      <MaskedInput maskPattern="###-###" aria-label="m" />,
    );
    const input = getByLabelText('m') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '123456' } });
    expect(input.value).toBe('123-456');
  });
});
