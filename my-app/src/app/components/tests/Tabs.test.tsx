import { render, fireEvent } from '@testing-library/react';
import { Tabs } from '@app/components/navigation/Tabs';

const items = [
  { key: 'one', label: 'One', content: <div>One</div> },
  { key: 'two', label: 'Two', content: <div>Two</div> },
];

describe('Tabs', () => {
  it('changes tab on click', () => {
    const { getByRole, getByText } = render(<Tabs items={items} />);
    fireEvent.click(getByRole('tab', { name: 'Two' }));
    expect(getByText('Two')).toBeInTheDocument();
  });
});
