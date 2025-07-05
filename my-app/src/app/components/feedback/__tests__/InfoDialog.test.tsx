import { render } from '@testing-library/react';
import { InfoDialog } from '../InfoDialog';

describe('InfoDialog', () => {
  it('renders children', () => {
    const { getByText } = render(<InfoDialog>Child</InfoDialog>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
