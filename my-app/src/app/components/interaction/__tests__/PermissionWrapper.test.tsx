import { render } from '@testing-library/react';
import { PermissionWrapper } from '../PermissionWrapper';

describe('PermissionWrapper', () => {
  it('renders children', () => {
    const { getByText } = render(<PermissionWrapper>Child</PermissionWrapper>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
