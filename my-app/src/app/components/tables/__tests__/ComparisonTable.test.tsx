import { render } from '@testing-library/react';
import { ComparisonTable } from '../ComparisonTable';

const rows = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
];
const columns = [{ key: 'name', title: 'Name' }];

describe('ComparisonTable', () => {
  it('highlights differences', () => {
    const { container } = render(
      <ComparisonTable data={rows} columns={columns} />,
    );
    const cells = container.querySelectorAll('tbody tr:nth-child(2) td');
    expect(cells[0].className).toMatch(/bg-yellow/);
  });
});
