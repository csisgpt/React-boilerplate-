import React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface SessionExpiredModalProps extends Omit<ModalProps, 'footer'> {
  onRedirect: () => void;
}

export const SessionExpiredModal: React.FC<SessionExpiredModalProps> = ({
  onRedirect,
  onClose,
  ...props
}) => (
  <Modal
    {...props}
    onClose={onClose}
    footer={
      <>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button onClick={onRedirect}>Login</Button>
      </>
    }
  >
    <p>Your session has expired.</p>
  </Modal>
);
