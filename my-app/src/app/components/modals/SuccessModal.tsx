import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface SuccessModalProps extends Omit<ModalProps, 'footer'> {
  message: string;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ message, onClose, ...props }) => (
  <Modal {...props} onClose={onClose} footer={<Button onClick={onClose}>Close</Button>}>
    <div className="text-green-600 text-center p-4">{message}</div>
  </Modal>
);
