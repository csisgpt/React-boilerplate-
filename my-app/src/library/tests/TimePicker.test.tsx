import { render, fireEvent } from '@testing-library/react';
import { TimePicker } from '../components/inputs/TimePicker';

describe('TimePicker', () => {
  it('calls onChange with selected time', () => {
    const handle = jest.fn();
    const { getByLabelText } = render(
      <TimePicker name="t" label="time" onChange={handle} />,
    );
    const input = getByLabelText('time') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '12:30' } });
    expect(handle).toHaveBeenCalledWith('12:30');
  });
});
