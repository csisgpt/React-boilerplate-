import React from 'react';
import { Modal, ModalProps } from './Modal';

export const LoadingModal: React.FC<ModalProps> = (props) => (
  <Modal {...props} footer={null}>
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-600 border-t-transparent" />
    </div>
  </Modal>
);
