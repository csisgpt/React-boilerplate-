import { render, fireEvent } from '@testing-library/react';
import { FocusLock } from '../FocusLock';

describe('FocusLock', () => {
  it('releases on Escape', () => {
    const onRelease = jest.fn();
    render(
      <FocusLock onRelease={onRelease}>
        <button>btn</button>
      </FocusLock>
    );
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onRelease).toHaveBeenCalled();
  });
});
