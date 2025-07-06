import { render, fireEvent } from '@testing-library/react';
import { DateRangePicker } from '../components/inputs/DateRangePicker';

describe('DateRangePicker', () => {
  it('selects start and end dates', () => {
    const handle = jest.fn();
    const { getAllByRole, getByText } = render(
      <DateRangePicker name="r" onChange={handle} />,
    );
    const inputs = getAllByRole('textbox');
    fireEvent.click(inputs[0]);
    fireEvent.click(getAllByRole('gridcell')[0]);
    fireEvent.click(inputs[1]);
    fireEvent.click(getAllByRole('gridcell')[10]);
    expect(handle).toHaveBeenCalledTimes(2);
  });
});
