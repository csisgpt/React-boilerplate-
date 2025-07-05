import { render } from '@testing-library/react';
import { RichTextEditor } from '../RichTextEditor';

describe('RichTextEditor', () => {
  it('renders children', () => {
    const { getByText } = render(<RichTextEditor>Child</RichTextEditor>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
