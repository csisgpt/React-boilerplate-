import { render } from '@testing-library/react';
import { Drawer } from '@app/components/navigation/Drawer';

describe('Drawer', () => {
  it('renders when open', () => {
    const { getByRole } = render(
      <Drawer open onClose={() => {}}>Content</Drawer>
    );
    expect(getByRole('dialog')).toBeInTheDocument();
  });
});
