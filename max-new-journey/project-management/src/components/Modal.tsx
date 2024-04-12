import { ReactNode, useImperativeHandle, useRef, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.tsx';

type ModalProps = {
  children: ReactNode;
  buttonCaption: string;
};

export type ModalRef = {
  openModal: () => void;
};

export default forwardRef<ModalRef, ModalProps>(function Modal(
  { children, buttonCaption },
  ref,
) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => {
        dialogRef.current?.showModal();
      },
    }),
    [],
  );

  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}

      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')!,
  );
});
