import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { FileUploader, FileUploaderRef } from '../components/inputs/FileUploader';

declare const global: any;

global.URL.createObjectURL = jest.fn(() => 'preview');

HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
  drawImage: jest.fn(),
})) as any;
HTMLCanvasElement.prototype.toBlob = function (cb: (b: Blob) => void) {
  cb(new Blob(['x'], { type: 'image/png' }));
};

describe('FileUploader', () => {
  it('handles file drop', async () => {
    const onUpload = jest.fn();
    const file = new File(['1'], 'a.png', { type: 'image/png' });
    const { getByText, getByRole } = render(
      <FileUploader name="f" onUpload={onUpload} />,
    );
    const dropArea = getByText(/drag/i).parentElement as HTMLElement;
    fireEvent.drop(dropArea, { dataTransfer: { files: [file] } });
    await waitFor(() => expect(onUpload).toHaveBeenCalled());
    expect(getByRole('list').children).toHaveLength(1);
  });

  it('removes file via ref', async () => {
    const file = new File(['1'], 'b.png', { type: 'image/png' });
    const ref = React.createRef<FileUploaderRef>();
    const { getByText, getByRole } = render(<FileUploader name="f" ref={ref} />);
    const dropArea = getByText(/drag/i).parentElement as HTMLElement;
    fireEvent.drop(dropArea, { dataTransfer: { files: [file] } });
    await waitFor(() => expect(getByRole('list').children).toHaveLength(1));
    ref.current!.removeFile(file);
    await waitFor(() => expect(getByRole('list').children).toHaveLength(0));
  });

  it('crop workflow', async () => {
    const file = new File(['1'], 'c.png', { type: 'image/png' });
    const { getByText, getByLabelText, queryByLabelText } = render(
      <FileUploader name="f" />,
    );
    const dropArea = getByText(/drag/i).parentElement as HTMLElement;
    fireEvent.drop(dropArea, { dataTransfer: { files: [file] } });
    await waitFor(() => expect(getByLabelText(`Crop ${file.name}`)).toBeInTheDocument());
    fireEvent.click(getByLabelText(`Crop ${file.name}`));
    await waitFor(() => expect(getByLabelText('Apply crop')).toBeInTheDocument());
    fireEvent.click(getByLabelText('Apply crop'));
    await waitFor(() => expect(queryByLabelText('Apply crop')).not.toBeInTheDocument());
  });
});
