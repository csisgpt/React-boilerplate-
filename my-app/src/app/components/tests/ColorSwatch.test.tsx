import { render, fireEvent } from '@testing-library/react';
import { ColorSwatch } from '@app/components/theme/ColorSwatch';

it('calls onSelect with color value', () => {
  const handle = jest.fn();
  const { getByLabelText } = render(
    <ColorSwatch colors={{ red: '#ff0000' }} onSelect={handle} />
  );
  fireEvent.click(getByLabelText('red'));
  expect(handle).toHaveBeenCalledWith('#ff0000');
});
