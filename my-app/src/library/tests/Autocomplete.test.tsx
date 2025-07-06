import { fireEvent, render, waitFor } from '@testing-library/react';
import { Autocomplete } from '../components/inputs/Autocomplete';

describe('Autocomplete', () => {
  it('fetches suggestions as user types', async () => {
    const fetcher = jest.fn(async () => ['one']);
    const { getByRole } = render(
      <Autocomplete optionsFetcher={fetcher} debounce={0} onChange={() => {}} />,
    );
    fireEvent.change(getByRole('combobox'), { target: { value: 'o' } });
    await waitFor(() => expect(fetcher).toHaveBeenCalledWith('o'));
  });

  it('allows keyboard navigation and selection', async () => {
    const fetcher = jest.fn(async () => ['a', 'b']);
    const { getByRole, getByText } = render(
      <Autocomplete optionsFetcher={fetcher} debounce={0} minChars={0} onChange={() => {}} />,
    );
    const input = getByRole('combobox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => getByText('a'));
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(input.value).toBe('b');
  });

  it('selects option on click', async () => {
    const fetcher = jest.fn(async () => ['foo', 'bar']);
    const { getByRole, getByText } = render(
      <Autocomplete optionsFetcher={fetcher} debounce={0} minChars={0} onChange={() => {}} />,
    );
    const input = getByRole('combobox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '' } });
    const option = await waitFor(() => getByText('bar'));
    fireEvent.mouseDown(option);
    expect(input.value).toBe('bar');
  });
});
