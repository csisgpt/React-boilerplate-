import { render } from '@testing-library/react';
import { ConfirmationDialog } from '../ConfirmationDialog';

describe('ConfirmationDialog', () => {
  it('renders children', () => {
    const { getByText } = render(<ConfirmationDialog>Child</ConfirmationDialog>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
