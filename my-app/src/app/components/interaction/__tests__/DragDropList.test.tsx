import { render } from '@testing-library/react';
import { DragDropList } from '../DragDropList';

describe('DragDropList', () => {
  it('renders children', () => {
    const { getByText } = render(<DragDropList>Child</DragDropList>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
