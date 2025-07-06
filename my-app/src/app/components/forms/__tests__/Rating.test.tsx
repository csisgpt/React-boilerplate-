import { render } from '@testing-library/react';
import { Rating } from '../Rating';

describe('Rating', () => {
  it('renders label', () => {
    const { getByText } = render(
      <Rating name="rate" label="Label" />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
