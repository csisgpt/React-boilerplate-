import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface PermissionModalProps extends Omit<ModalProps, 'footer'> {
  message: string;
}

export const PermissionModal: React.FC<PermissionModalProps> = ({ message, onClose, ...props }) => (
  <Modal {...props} onClose={onClose} footer={<Button onClick={onClose}>Close</Button>}>
    <p>{message}</p>
  </Modal>
);
