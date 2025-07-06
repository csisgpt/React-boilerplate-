import { render } from '@testing-library/react';
import { SEO } from '../SEO';

describe('SEO', () => {
  it('sets document title', () => {
    render(<SEO title="Test" description="desc" />);
    expect(document.title).toBe('Test');
  });
});
