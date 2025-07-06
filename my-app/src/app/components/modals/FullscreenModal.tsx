import React from 'react';
import { Modal, ModalProps } from './Modal';

export const FullscreenModal: React.FC<ModalProps> = ({ children, ...props }) => (
  <Modal {...props} placement="top">
    <div className="h-screen overflow-auto">{children}</div>
  </Modal>
);
