import { render } from '@testing-library/react';
import { ButtonGroup } from '../ButtonGroup';

describe('ButtonGroup', () => {
  it('applies orientation classes', () => {
    const { container } = render(
      <ButtonGroup orientation="vertical">
        <button>1</button>
        <button>2</button>
      </ButtonGroup>
    );
    expect(container.firstChild).toHaveClass('flex-col');
  });
});
