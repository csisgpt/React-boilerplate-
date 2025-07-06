import { render } from '@testing-library/react';
import ThemeProviderWrapper from '../ThemeProviderWrapper';

describe('ThemeProviderWrapper', () => {
  it('renders children', () => {
    const { getByText } = render(<ThemeProviderWrapper>hi</ThemeProviderWrapper>);
    expect(getByText('hi')).toBeInTheDocument();
  });
});
