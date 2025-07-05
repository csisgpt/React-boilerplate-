import { render } from '@testing-library/react';
import { Paragraph } from '../Paragraph';

describe('Paragraph', () => {
  it('renders children', () => {
    const { getByText } = render(<Paragraph>Child</Paragraph>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
