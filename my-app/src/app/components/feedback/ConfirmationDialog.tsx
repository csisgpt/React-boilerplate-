import React from 'react';
import { Dialog, DialogProps } from './Dialog';
import { Button } from '@app/components/ui/Button';

export interface ConfirmationDialogProps extends DialogProps {
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const ConfirmationDialog: React.FC<React.PropsWithChildren<ConfirmationDialogProps>> = ({
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  footer,
  ...rest
}) => {
  return (
    <Dialog
      {...rest}
      footer={
        footer ?? (
          <div className="flex justify-end gap-2">
            <Button onClick={onConfirm}>{confirmText}</Button>
            <Button variant="secondary" onClick={rest.onClose}>
              {cancelText}
            </Button>
          </div>
        )
      }
    />
  );
};
