import { render, fireEvent } from '@testing-library/react';
import { VirtualScroller } from '../VirtualScroller';

describe('VirtualScroller', () => {
  it('renders visible items only', () => {
    const items = Array.from({ length: 100 }, (_, i) => i);
    const { getByText, queryByText } = render(
      <VirtualScroller
        items={items}
        itemHeight={20}
        height={40}
        renderItem={(it) => <div>{`item-${it}`}</div>}
      />,
    );
    expect(getByText('item-0')).toBeInTheDocument();
    expect(getByText('item-1')).toBeInTheDocument();
    expect(queryByText('item-3')).not.toBeInTheDocument();
    fireEvent.scroll(getByText('item-0').parentElement!.parentElement!.parentElement!, { target: { scrollTop: 40 } });
  });
});
