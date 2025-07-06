import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface VideoModalProps extends Omit<ModalProps, 'children'> {
  src: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ src, onClose, ...props }) => (
  <Modal {...props} onClose={onClose} footer={<Button onClick={onClose}>Close</Button>}>
    <video src={src} controls className="w-full rounded" />
  </Modal>
);
