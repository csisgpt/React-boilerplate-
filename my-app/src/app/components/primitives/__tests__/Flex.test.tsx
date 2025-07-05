import { render } from '@testing-library/react';
import { Flex } from '../Flex';

describe('Flex', () => {
  it('renders children', () => {
    const { getByText } = render(<Flex>Child</Flex>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
