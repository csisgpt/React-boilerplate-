import { render, fireEvent, waitFor } from '@testing-library/react';
import { Input } from '../components/inputs/Input';
import { FormProvider, useForm } from 'react-hook-form';

function withForm(children: React.ReactNode) {
  const Wrapper = () => {
    const methods = useForm<{ field: string }>({ mode: 'onBlur' });
    return <FormProvider {...methods}>{children}</FormProvider>;
  };
  return Wrapper;
}

describe('Input', () => {
  it('renders label', () => {
    const { getByLabelText } = render(<Input name="field" label="Label" />);
    expect(getByLabelText('Label')).toBeInTheDocument();
  });

  it('calls onChange', () => {
    const handle = jest.fn();
    const { getByLabelText } = render(
      <Input name="field" label="Label" onChange={handle} />,
    );
    fireEvent.change(getByLabelText('Label'), { target: { value: 'x' } });
    expect(handle).toHaveBeenCalled();
  });

  it('shows validation error', async () => {
    const Wrapper = withForm(
      <Input
        name="field"
        label="Label"
        rules={{ required: 'required' }}
      />,
    );
    const { getByLabelText, getByText } = render(<Wrapper />);
    fireEvent.blur(getByLabelText('Label'));
    await waitFor(() => {
      expect(getByText('required')).toBeInTheDocument();
    });
  });
});
