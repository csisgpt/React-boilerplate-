import { render } from '@testing-library/react';
import { Transition } from '../Transition';

describe('Transition', () => {
  it('renders children', () => {
    const { getByText } = render(<Transition>hi</Transition>);
    expect(getByText('hi')).toBeInTheDocument();
  });
});
