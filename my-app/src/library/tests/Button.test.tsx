import { render, fireEvent } from '@testing-library/react';
import { Button } from '../components/inputs/Button';

describe('Button', () => {
  it('applies variant and size classes', () => {
    const { getByRole } = render(
      <Button variant="secondary" size="sm">Click</Button>
    );
    const btn = getByRole('button');
    expect(btn.className).toContain('bg-gray-200');
    expect(btn.className).toContain('px-2');
  });

  it('shows loading state and disables click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button isLoading onClick={onClick}>Load</Button>
    );
    const btn = getByRole('button');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });
});
