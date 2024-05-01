import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

function Modal({ children, open, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open && children}
    </dialog>,
    document.getElementById('modal')!,
  );
}

export default Modal;
