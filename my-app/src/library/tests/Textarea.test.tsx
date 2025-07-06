import { render, fireEvent, waitFor } from '@testing-library/react';
import { Textarea } from '../components/inputs/Textarea';
import { FormProvider, useForm } from 'react-hook-form';

function withForm(children: React.ReactNode) {
  const Wrapper = () => {
    const methods = useForm<{ field: string }>({ mode: 'onBlur' });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return Wrapper;
}

describe('Textarea', () => {
  it('renders label', () => {
    const { getByLabelText } = render(
      <Textarea name="field" label="Area" />,
    );
    expect(getByLabelText('Area')).toBeInTheDocument();
  });

  it('shows validation error', async () => {
    const Wrapper = withForm(
      <Textarea name="field" label="Area" rules={{ required: 'req' }} />,
    );
    const { getByLabelText, getByText } = render(<Wrapper />);
    fireEvent.blur(getByLabelText('Area'));
    await waitFor(() => {
      expect(getByText('req')).toBeInTheDocument();
    });
  });
});
