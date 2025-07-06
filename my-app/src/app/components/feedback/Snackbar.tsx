import React from 'react';
import { Toast, ToastProps } from './Toast';

export interface SnackbarProps extends ToastProps {}

export const Snackbar: React.FC<SnackbarProps> = (props) => {
  return <Toast {...props} />;
};
