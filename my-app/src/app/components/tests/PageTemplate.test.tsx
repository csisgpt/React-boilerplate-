import { render } from '@testing-library/react';
import { PageTemplate } from '@app/components/layout/PageTemplate';

describe('PageTemplate', () => {
  it('renders title', () => {
    const { getByText } = render(
      <PageTemplate title="Title">Content</PageTemplate>
    );
    expect(getByText('Title')).toBeInTheDocument();
  });
});
