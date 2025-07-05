import { render } from '@testing-library/react';
import { Text } from '../Text';

describe('Text', () => {
  it('renders children', () => {
    const { getByText } = render(<Text>Child</Text>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
