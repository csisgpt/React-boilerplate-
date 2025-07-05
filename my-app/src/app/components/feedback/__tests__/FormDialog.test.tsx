import { render } from '@testing-library/react';
import { FormDialog } from '../FormDialog';

describe('FormDialog', () => {
  it('renders children', () => {
    const { getByText } = render(<FormDialog>Child</FormDialog>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
