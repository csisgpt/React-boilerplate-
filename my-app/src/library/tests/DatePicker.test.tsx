import { render, fireEvent } from '@testing-library/react';
import { DatePicker } from '../components/inputs/DatePicker';

describe('DatePicker', () => {
  it('renders gregorian calendar', () => {
    const { getByRole } = render(
      <DatePicker name="d" onChange={() => {}} calendar="gregorian" />,
    );
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.click(input);
    const grid = getByRole('grid');
    expect(grid).toBeInTheDocument();
  });

  it('renders jalali digits', () => {
    const { getByRole, getAllByRole } = render(
      <DatePicker name="d" onChange={() => {}} calendar="jalali" locale="fa-IR" />,
    );
    fireEvent.click(getByRole('textbox'));
    const cells = getAllByRole('gridcell');
    expect(cells[0].textContent).toMatch(/[۰-۹]/);
  });
});
