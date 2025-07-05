import { render } from '@testing-library/react';
import { FileUploader } from '../FileUploader';

describe('FileUploader', () => {
  it('renders children', () => {
    const { getByText } = render(<FileUploader>Child</FileUploader>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
