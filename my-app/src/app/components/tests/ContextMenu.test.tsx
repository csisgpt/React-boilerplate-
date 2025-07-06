import { render, fireEvent } from '@testing-library/react';
import { ContextMenu } from '@app/components/navigation/ContextMenu';

describe('ContextMenu', () => {
  it('shows menu on context menu event', () => {
    const { container, getByText } = render(
      <ContextMenu items={[{ label: 'Action' }]} />
    );
    fireEvent.contextMenu(container.firstChild as Element);
    expect(getByText('Action')).toBeInTheDocument();
  });
});
