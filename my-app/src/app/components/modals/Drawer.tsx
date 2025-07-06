import React from 'react';
import { Modal, ModalProps } from './Modal';

export const Drawer: React.FC<ModalProps> = ({ placement = 'left', ...props }) => (
  <Modal {...props} placement={placement} />
);
