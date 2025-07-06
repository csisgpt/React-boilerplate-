import { render, fireEvent } from '@testing-library/react';
import { FormDialog } from '@app/components/modals/FormDialog';

describe('FormDialog', () => {
  it('submits form', () => {
    const onSubmit = jest.fn((e) => e.preventDefault());
    const { getByText } = render(
      <FormDialog isOpen onClose={() => {}} onSubmit={onSubmit} title="Form">
        <input name="test" />
      </FormDialog>
    );
    fireEvent.submit(getByText('Submit').closest('form')!);
    expect(onSubmit).toHaveBeenCalled();
  });
});
