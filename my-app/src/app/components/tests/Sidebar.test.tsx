import { render } from '@testing-library/react';
import { Sidebar } from '@app/components/navigation/Sidebar';

describe('Sidebar', () => {
  it('shows when open', () => {
    const { container } = render(
      <Sidebar open onClose={() => {}}>S</Sidebar>
    );
    expect(container.firstChild).toHaveClass('translate-x-0');
  });
});
