import { render } from '@testing-library/react';
import { ComparisonTable } from '../ComparisonTable';

const rows = [
  { key: 'name', label: 'Name', a: 'Alice', b: 'Bob' },
];

describe('ComparisonTable', () => {
  it('highlights differences', () => {
    const { container } = render(<ComparisonTable rows={rows} />);
    const cells = container.querySelectorAll('tbody td');
    expect(cells[1].className).toMatch(/bg-red/);
    expect(cells[2].className).toMatch(/bg-green/);
  });
});
