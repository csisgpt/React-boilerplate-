import { render } from '@testing-library/react';
import { RichTextEditor } from '../RichTextEditor';

describe('RichTextEditor', () => {
  it('renders label', () => {
    const { getByText } = render(<RichTextEditor name="rte" label="Label" />);
    expect(getByText('Label')).toBeInTheDocument();
  });
});
