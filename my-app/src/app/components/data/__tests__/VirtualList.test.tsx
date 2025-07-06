import { render } from '@testing-library/react';
import { VirtualList } from '../VirtualList';

describe('VirtualList', () => {
  it('shows only visible items', () => {
    const data = Array.from({ length: 100 }).map((_, i) => `Item ${i}`);
    const { queryByText } = render(
      <VirtualList data={data} height={50} itemHeight={20} renderItem={(d) => <div>{d}</div>} />,
    );
    expect(queryByText('Item 0')).toBeInTheDocument();
    expect(queryByText('Item 99')).not.toBeInTheDocument();
  });
});
