import { render } from '@testing-library/react';
import { Tooltip } from '../Tooltip';

describe('Tooltip', () => {
  it('renders children', () => {
    const { getByText } = render(<Tooltip>Child</Tooltip>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
