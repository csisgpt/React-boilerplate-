import { render, fireEvent } from '@testing-library/react';
import { ColorPicker } from '@app/components/theme/ColorPicker';

it('updates color on input change', () => {
  const handle = jest.fn();
  const { getByLabelText } = render(
    <ColorPicker value="#ffffff" onChange={handle} />
  );
  fireEvent.change(getByLabelText('Color picker'), { target: { value: '#000000' } });
  expect(handle).toHaveBeenCalledWith('#000000');
});
