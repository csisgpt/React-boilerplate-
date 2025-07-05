import { render } from '@testing-library/react';
import { Textarea } from '../Textarea';

describe('Textarea', () => {
  it('renders children', () => {
    const { getByText } = render(<Textarea>Child</Textarea>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
