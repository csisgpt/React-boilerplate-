import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface ErrorModalProps extends Omit<ModalProps, 'footer'> {
  message: string;
}

export const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose, ...props }) => (
  <Modal {...props} onClose={onClose} footer={<Button onClick={onClose}>Close</Button>}>
    <div className="text-red-600 text-center p-4">{message}</div>
  </Modal>
);
