import React from 'react';
import { Input, InputProps } from './Input';

export type PasswordInputProps = Omit<InputProps, 'type'>;

export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    return <Input type="password" {...props} ref={ref} />;
  },
);

export default PasswordInput;
