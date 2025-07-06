import { render } from '@testing-library/react';
import { Stepper } from '@app/components/navigation/Stepper';

describe('Stepper', () => {
  it('highlights active step', () => {
    const { getByText } = render(
      <Stepper active={1} steps={[{ label: 'One' }, { label: 'Two' }]} />
    );
    expect(getByText('Two').previousSibling).toHaveClass('bg-blue-600');
  });
});
