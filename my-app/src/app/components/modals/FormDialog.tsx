import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface FormDialogProps extends Omit<ModalProps, 'footer'> {
  onSubmit: (e: React.FormEvent) => void;
  submitLabel?: string;
  cancelLabel?: string;
}

export const FormDialog: React.FC<FormDialogProps> = ({
  onSubmit,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onClose,
  children,
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
        <Button type="submit" form="dialog-form">
          {submitLabel}
        </Button>
      </>
    }
  >
    <form id="dialog-form" onSubmit={onSubmit} className="space-y-4">
      {children}
    </form>
  </Modal>
);
