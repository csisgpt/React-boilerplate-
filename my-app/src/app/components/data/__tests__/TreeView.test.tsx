import { render } from '@testing-library/react';
import { TreeView } from '../TreeView';

describe('TreeView', () => {
  it('renders children', () => {
    const { getByText } = render(<TreeView>Child</TreeView>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
