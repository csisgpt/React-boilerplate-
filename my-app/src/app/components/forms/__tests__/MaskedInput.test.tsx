import { render } from '@testing-library/react';
import { MaskedInput } from '../MaskedInput';

describe('MaskedInput', () => {
  it('renders label', () => {
    const { getByText } = render(
      <MaskedInput name="mask" label="Label" mask={(v) => v} />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
