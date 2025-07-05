import { render } from '@testing-library/react';
import { MemberCard } from '../MemberCard';

describe('MemberCard', () => {
  it('renders children', () => {
    const { getByText } = render(<MemberCard>Child</MemberCard>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
