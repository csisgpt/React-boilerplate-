import { render } from '@testing-library/react';
import { Drawer } from '@app/components/modals/Drawer';

describe('Drawer', () => {
  it('renders when open', () => {
    const { getByRole } = render(<Drawer isOpen onClose={() => {}}>Content</Drawer>);
    expect(getByRole('dialog')).toBeInTheDocument();
  });
});
