import React, { useState } from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '@app/components/ui/Button';

export interface ImagePreviewModalProps extends Omit<ModalProps, 'children'> {
  src: string;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  src,
  onClose,
  ...props
}) => {
  const [zoom, setZoom] = useState(1);
  return (
    <Modal
      {...props}
      onClose={onClose}
      footer={
        <>
          <Button variant="secondary" onClick={() => setZoom((z) => Math.max(1, z - 0.25))}>
            -
          </Button>
          <Button variant="secondary" onClick={() => setZoom((z) => z + 0.25)}>
            +
          </Button>
          <Button onClick={onClose}>Close</Button>
        </>
      }
    >
      <div className="flex justify-center overflow-auto">
        <img src={src} alt={props.title ?? ''} style={{ transform: `scale(${zoom})` }} />
      </div>
    </Modal>
  );
};
