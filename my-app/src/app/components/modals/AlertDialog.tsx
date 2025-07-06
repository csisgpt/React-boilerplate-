import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface AlertDialogProps extends Omit<ModalProps, 'footer'> {
  confirmLabel?: string;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  confirmLabel = 'OK',
  onClose,
  ...props
}) => (
  <Modal
    {...props}
    onClose={onClose}
    footer={<Button onClick={onClose}>{confirmLabel}</Button>}
  />
);
