import { render } from '@testing-library/react';
import { Toast } from '../Toast';

describe('Toast', () => {
  it('renders children', () => {
    const { getByText } = render(<Toast>Child</Toast>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
