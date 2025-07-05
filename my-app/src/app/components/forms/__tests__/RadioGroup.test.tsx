import { render } from '@testing-library/react';
import { RadioGroup } from '../RadioGroup';

describe('RadioGroup', () => {
  it('renders children', () => {
    const { getByText } = render(<RadioGroup>Child</RadioGroup>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
