import { DUMMY_PRODUCTS } from "../dummy-products.ts";
import { ShoppingCartState } from "./shop-context.tsx";

export enum Actions {
  ADD_ITEM_TO_CART,
  ITEM_UPDATE,
}

type ADD_ITEM_TO_CART_ACTION = {
  type: Actions.ADD_ITEM_TO_CART;
  payload: {
    id: string;
  };
};

type ITEM_UPDATE_ACTION = {
  type: Actions.ITEM_UPDATE;
  payload: {
    productId: string;
    amount: number;
  };
};

type ShoppingCartAction = ADD_ITEM_TO_CART_ACTION | ITEM_UPDATE_ACTION;

export function shoppingCartReducer(
  state: ShoppingCartState,
  action: ShoppingCartAction,
): ShoppingCartState {
  switch (action.type) {
    case Actions.ADD_ITEM_TO_CART:
      return handleAddItemToCart(state, action.payload.id);
    case Actions.ITEM_UPDATE:
      return handleUpdateCartItemQuantity(
        state,
        action.payload.productId,
        action.payload.amount,
      );
    default:
      return state;
  }
}

function handleAddItemToCart(state: ShoppingCartState, id: string) {
  const updatedItems = [...state.items];

  const existingCartItemIndex = updatedItems.findIndex(
    (cartItem) => cartItem.id === id,
  );
  const existingCartItem = updatedItems[existingCartItemIndex];

  if (existingCartItem) {
    updatedItems[existingCartItemIndex] = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
  } else {
    const product = DUMMY_PRODUCTS.find((product) => product.id === id)!;
    updatedItems.push({
      id: id,
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  }

  return {
    items: updatedItems,
  };
}

function handleUpdateCartItemQuantity(
  state: ShoppingCartState,
  productId: string,
  amount: number,
) {
  const updatedItems = [...state.items];

  const updatedItemIndex = updatedItems.findIndex(
    (item) => item.id === productId,
  );

  const updatedItem = {
    ...updatedItems[updatedItemIndex],
  };

  updatedItem.quantity += amount;

  if (updatedItem.quantity <= 0) {
    updatedItems.splice(updatedItemIndex, 1);
  } else {
    updatedItems[updatedItemIndex] = updatedItem;
  }

  return {
    items: updatedItems,
  };
}
