import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "../type.ts";
import { DUMMY_PRODUCTS } from "../dummy-products.ts";

type ShopContextType = {
  items: CartItem[];
  onAddItemToCart: (id: string) => void;
  onUpdateCartItemQuantity: (productId: string, amount: number) => void;
};

const ShopContext = createContext<ShopContextType | null>(null);

export function useShopContext() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext error");
  }

  return context;
}

type ShopContextProviderProps = {
  children: ReactNode;
};

export type Type = {
  items: CartItem[];
};

export const ShopContextProvider = ({ children }: ShopContextProviderProps) => {
  const [shoppingCart, setShoppingCart] = useState<Type>({
    items: [],
  });

  function handleAddItemToCart(id: string) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];

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
    });
  }

  function handleUpdateCartItemQuantity(productId: string, amount: number) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
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
    });
  }

  return (
    <ShopContext.Provider
      value={{
        items: shoppingCart.items,
        onAddItemToCart: handleAddItemToCart,
        onUpdateCartItemQuantity: handleUpdateCartItemQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
