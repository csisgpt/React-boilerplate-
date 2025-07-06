import { render } from '@testing-library/react';
import { InputGroup } from '../InputGroup';

describe('InputGroup', () => {
  it('renders label and error', () => {
    const { getByText } = render(
      <InputGroup label="Name" htmlFor="name" error="Required">
        <input id="name" />
      </InputGroup>
    );
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Required')).toBeInTheDocument();
  });
});
