import { forwardRef, useImperativeHandle, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart.js";
import { CartItem } from "../type.ts";

type CartModalProps = {
  cartItems: CartItem[];
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
  title: string;
  actions: ReactNode;
};

export type CartModalRefType = {
  open: () => void;
};

const CartModal = forwardRef<CartModalRefType, CartModalProps>(function Modal(
  { cartItems, onUpdateCartItemQuantity, title, actions },
  ref,
) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")!,
  );
});

export default CartModal;
