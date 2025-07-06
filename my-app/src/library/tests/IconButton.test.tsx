import { render, fireEvent } from '@testing-library/react';
import { IconButton } from '../components/inputs/IconButton';

describe('IconButton', () => {
  it('applies classes', () => {
    const { getByRole } = render(
      <IconButton variant="ghost" size="lg">I</IconButton>
    );
    const btn = getByRole('button');
    expect(btn.className).toContain('bg-transparent');
    expect(btn.className).toContain('p-3');
  });

  it('suppresses click when loading', () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <IconButton isLoading onClick={onClick}>I</IconButton>
    );
    const btn = getByRole('button');
    fireEvent.click(btn);
    expect(onClick).not.toHaveBeenCalled();
  });
});
