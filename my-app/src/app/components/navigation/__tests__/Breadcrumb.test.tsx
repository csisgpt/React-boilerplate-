import { render } from '@testing-library/react';
import { Breadcrumb } from '../Breadcrumb';

describe('Breadcrumb', () => {
  it('renders children', () => {
    const { getByText } = render(<Breadcrumb>Child</Breadcrumb>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
