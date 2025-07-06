import { render, fireEvent } from '@testing-library/react';
import { MaskedInput } from '../components/inputs/MaskedInput';

describe('MaskedInput', () => {
  it('applies mask on typing', () => {
    const { getByLabelText } = render(
      <MaskedInput maskPattern="###-###" aria-label="masked" />,
    );
    const input = getByLabelText('masked') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '123456' } });
    expect(input.value).toBe('123-456');
  });

  it('handles paste with formatting', () => {
    const { getByLabelText } = render(
      <MaskedInput maskPattern="###-###" aria-label="masked" />,
    );
    const input = getByLabelText('masked') as HTMLInputElement;
    fireEvent.paste(input, { clipboardData: { getData: () => '987654' } } as any);
    fireEvent.change(input, { target: { value: '987654' } });
    expect(input.value).toBe('987-654');
  });
});
