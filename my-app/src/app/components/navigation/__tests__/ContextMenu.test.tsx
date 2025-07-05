import { render } from '@testing-library/react';
import { ContextMenu } from '../ContextMenu';

describe('ContextMenu', () => {
  it('renders children', () => {
    const { getByText } = render(<ContextMenu>Child</ContextMenu>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
