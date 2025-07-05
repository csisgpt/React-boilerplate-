import { render } from '@testing-library/react';
import { Accordion } from '../Accordion';

describe('Accordion', () => {
  it('renders children', () => {
    const { getByText } = render(<Accordion>Child</Accordion>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
