import { render, fireEvent } from '@testing-library/react';
import { Slider } from '../components/inputs/Slider';

describe('Slider', () => {
  it('changes value with keyboard', () => {
    const { getByRole } = render(<Slider name="s" />);
    const slider = getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuenow', '0');
    fireEvent.keyDown(slider, { key: 'ArrowRight' });
    expect(slider).toHaveAttribute('aria-valuenow', '1');
  });

  it('changes value on drag', () => {
    const { container, getByRole } = render(<Slider name="s" />);
    const slider = getByRole('slider');
    const thumb = slider.querySelector('div > div:nth-child(2)') as HTMLElement;
    fireEvent.pointerDown(thumb, { clientX: 0 });
    fireEvent.pointerMove(thumb, { clientX: 50 });
    fireEvent.pointerUp(thumb, { clientX: 50 });
    expect(slider.getAttribute('aria-valuenow')).not.toBe('0');
  });
});
