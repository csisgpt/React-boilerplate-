import React, { createContext, useContext, useState } from 'react';
import { Modal } from '@app/components/modals/Modal';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ContextValue {
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ContextValue | null>(null);

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalWrapper');
  return ctx;
};

export interface ModalWrapperProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({ trigger, children, className }) => {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open: openModal, close: closeModal }}>
      <span onClick={openModal} className="cursor-pointer">
        {trigger}
      </span>
      <Modal isOpen={open} onClose={closeModal}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={clsx('p-4', className)}
        >
          {children}
        </motion.div>
      </Modal>
    </ModalContext.Provider>
  );
};
