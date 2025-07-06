import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface UpdateAvailableModalProps extends Omit<ModalProps, 'footer'> {
  onUpdate: () => void;
}

export const UpdateAvailableModal: React.FC<UpdateAvailableModalProps> = ({
  onUpdate,
  onClose,
  ...props
}) => (
  <Modal
    {...props}
    onClose={onClose}
    footer={
      <>
        <Button variant="secondary" onClick={onClose}>
          Later
        </Button>
        <Button onClick={onUpdate}>Update</Button>
      </>
    }
  >
    <p>An update is available.</p>
  </Modal>
);
