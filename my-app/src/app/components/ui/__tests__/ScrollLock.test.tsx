import { render } from '@testing-library/react';
import { ScrollLock } from '../ScrollLock';

describe('ScrollLock', () => {
  it('locks body scroll while mounted', () => {
    const { unmount } = render(<ScrollLock />);
    expect(document.body.style.overflow).toBe('hidden');
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
});
