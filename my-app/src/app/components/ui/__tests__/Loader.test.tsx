import { render } from '@testing-library/react';
import { Loader } from '../Loader';

describe('Loader', () => {
  it('renders label', () => {
    const { getByText } = render(<Loader label="Loading" />);
    expect(getByText('Loading')).toBeInTheDocument();
  });
});
