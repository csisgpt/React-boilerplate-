jest.mock('react-quill', () => {
  const React = require('react');
  const mockQuillRender = jest.fn();
  const Quill = React.forwardRef((props: any, ref) => {
    mockQuillRender(props);
    return (
      <div>
        <button data-testid="bold" onClick={() => props.onChange?.('bold')}>B</button>
        <textarea
          data-testid="quill"
          ref={ref as any}
          value={props.value || ''}
          onChange={(e) => props.onChange?.((e.target as HTMLTextAreaElement).value)}
        />
      </div>
    );
  });
  return { __esModule: true, default: Quill, mockQuillRender };
});

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { RichTextEditor } from '../components/inputs/RichTextEditor';
import { mockQuillRender } from 'react-quill';

describe('RichTextEditor', () => {
  it('lazy loads editor', async () => {
    render(<RichTextEditor />);
    await waitFor(() => expect(mockQuillRender).toHaveBeenCalled());
    expect(screen.getByTestId('quill')).toBeInTheDocument();
  });

  it('handles typing', async () => {
    const handleChange = jest.fn();
    render(<RichTextEditor onChange={handleChange} />);
    await waitFor(() => expect(mockQuillRender).toHaveBeenCalled());
    fireEvent.change(screen.getByTestId('quill'), { target: { value: 'hello' } });
    expect(handleChange).toHaveBeenCalledWith('hello');
  });

  it('passes toolbar config', async () => {
    const toolbar = ['bold'];
    render(<RichTextEditor toolbar={toolbar} />);
    await waitFor(() => expect(mockQuillRender).toHaveBeenCalled());
    expect(mockQuillRender.mock.calls[0][0].modules).toEqual({ toolbar });
  });

  it('toolbar button click fires change', async () => {
    const handleChange = jest.fn();
    render(<RichTextEditor onChange={handleChange} />);
    await waitFor(() => expect(mockQuillRender).toHaveBeenCalled());
    fireEvent.click(screen.getByTestId('bold'));
    expect(handleChange).toHaveBeenCalledWith('bold');
  });
});
