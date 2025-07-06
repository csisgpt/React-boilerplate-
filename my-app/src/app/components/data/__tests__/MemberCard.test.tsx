import { render } from '@testing-library/react';
import { MemberCard } from '../MemberCard';

describe('MemberCard', () => {
  it('shows avatar fallback', () => {
    const { getByText } = render(<MemberCard name="Alice" />);
    expect(getByText('A')).toBeInTheDocument();
  });
});
