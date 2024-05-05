import { createContext, ReactNode, useContext, useReducer } from "react";
import { CartItem } from "../type.ts";
import { Actions, shoppingCartReducer } from "./shop-reducer.ts";

type ShopContextType = {
  items: CartItem[];
  onAddItemToCart: (id: string) => void;
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

export function useShopContext() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("ShopContext error");
  }

  return context;
}

type ShopContextProviderProps = {
  children: ReactNode;
};

export type ShoppingCartState = {
  items: CartItem[];
};

const initialState: ShoppingCartState = {
  items: [],
};

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    initialState,
  );

  function handleAddItemToCart(id: string) {
    shoppingCartDispatch({ type: Actions.ADD_ITEM_TO_CART, payload: { id } });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    shoppingCartDispatch({
      type: Actions.ITEM_UPDATE,
      payload: { productId, amount },
    });
  }

  return (
    <ShopContext.Provider
      value={{
        items: shoppingCartState.items,
        onAddItemToCart: handleAddItemToCart,
        onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
