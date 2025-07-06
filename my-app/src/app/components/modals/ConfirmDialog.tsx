import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface ConfirmDialogProps extends Omit<ModalProps, 'footer'> {
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  onConfirm,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onClose,
  ...props
}) => (
  <Modal
    {...props}
    onClose={onClose}
    footer={
      <>
        <Button variant="secondary" onClick={onClose}>
          {cancelLabel}
        </Button>
        <Button onClick={onConfirm}>{confirmLabel}</Button>
      </>
    }
  />
);
