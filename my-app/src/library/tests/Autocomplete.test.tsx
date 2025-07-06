import { render, fireEvent, waitFor } from '@testing-library/react';
import { Autocomplete } from '../components/inputs/Autocomplete';

describe('Autocomplete', () => {
  it('fetches suggestions after typing', async () => {
    jest.useFakeTimers();
    const fetcher = jest.fn(() => Promise.resolve(['one']));
    const { getByRole, findByText } = render(
      <Autocomplete optionsFetcher={fetcher} debounce={300} />,
    );
    const input = getByRole('combobox');
    fireEvent.change(input, { target: { value: 'on' } });
    jest.advanceTimersByTime(300);
    await findByText('one');
    expect(fetcher).toHaveBeenCalledWith('on');
    jest.useRealTimers();
  });

  it('allows arrow navigation and selection', async () => {
    jest.useFakeTimers();
    const fetcher = jest.fn(() => Promise.resolve(['a', 'b', 'c']));
    const { getByRole, findByText } = render(
      <Autocomplete optionsFetcher={fetcher} debounce={0} />,
    );
    const input = getByRole('combobox');
    fireEvent.change(input, { target: { value: 'a' } });
    jest.advanceTimersByTime(0);
    await findByText('a');
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect((input as HTMLInputElement).value).toBe('b');
    jest.useRealTimers();
  });
});
