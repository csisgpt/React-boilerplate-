import { render, waitFor } from '@testing-library/react';
import { DataLoader } from '../DataLoader';

describe('DataLoader', () => {
  it('loads async component', async () => {
    const loader = async () => <div>Loaded</div>;
    const { getByText } = render(<DataLoader loader={loader} fallback="loading" />);
    await waitFor(() => expect(getByText('Loaded')).toBeInTheDocument());
  });
});
