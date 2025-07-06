import { render } from '@testing-library/react';
import { ChartWrapper } from '../ChartWrapper';

const data = [
  { label: 'A', value: 1 },
  { label: 'B', value: 2 },
];

describe('ChartWrapper', () => {
  it('renders svg elements', () => {
    const { container } = render(<ChartWrapper data={data} />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
