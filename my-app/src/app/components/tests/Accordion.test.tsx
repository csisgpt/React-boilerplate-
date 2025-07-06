import { render, fireEvent } from '@testing-library/react';
import { Accordion } from '@app/components/navigation/Accordion';

const items = [
  { key: 'a', label: 'A', content: <div>A content</div> },
  { key: 'b', label: 'B', content: <div>B content</div> },
];

describe('Accordion', () => {
  it('toggles content on button click', () => {
    const { getByText, queryByText } = render(<Accordion items={items} />);
    fireEvent.click(getByText('B'));
    expect(getByText('B content')).toBeInTheDocument();
    fireEvent.click(getByText('B'));
    expect(queryByText('B content')).not.toBeVisible();
  });
});
