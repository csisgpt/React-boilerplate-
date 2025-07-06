import { render, fireEvent } from '@testing-library/react';
import { Dropdown } from '@app/components/navigation/Dropdown';

describe('Dropdown', () => {
  it('opens menu on button click', () => {
    const { getByRole, getByText } = render(
      <Dropdown label="Menu" items={[{ label: 'Item 1' }]} />
    );
    fireEvent.click(getByRole('button'));
    expect(getByText('Item 1')).toBeInTheDocument();
  });
});
