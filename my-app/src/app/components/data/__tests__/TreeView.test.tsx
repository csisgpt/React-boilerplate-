import { render, fireEvent } from '@testing-library/react';
import { TreeView } from '../TreeView';

describe('TreeView', () => {
  it('toggles children on click', () => {
    const data = [{ id: '1', label: 'Parent', children: [{ id: '2', label: 'Child' }] }];
    const { getByText, queryByText } = render(<TreeView data={data} />);
    fireEvent.click(getByText('Parent'));
    expect(getByText('Child')).toBeInTheDocument();
    fireEvent.click(getByText('Parent'));
    expect(queryByText('Child')).not.toBeVisible();
  });
});
