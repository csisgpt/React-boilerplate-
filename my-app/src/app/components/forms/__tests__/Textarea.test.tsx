import { render } from '@testing-library/react';
import { Textarea } from '../Textarea';

describe('Textarea', () => {
  it('renders label', () => {
    const { getByText } = render(
      <Textarea name="text" label="Label" />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
