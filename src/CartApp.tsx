import { useEffect, useState } from "react";
import CartList from "./component/CartList";
import EVENTS, { emit, listen } from "@surenderrawat83/shared-ui-packages";
import type { CartItem } from "./types/cartitem.types";

const CartApp = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleIncrese = (id: number) => {
    emit(EVENTS.CART_QTY_ADD, id);
  };

  const handleDecrease = (id: number) => {
    emit(EVENTS.CART_QTY_REMOVE, id);
  };

  const handleRemove = (id: number) => {
    emit(EVENTS.CART_REMOVE, id);
  };

  useEffect(() => {
    // INITIAL STATE
    if (window.getCartSnapshot) {
      const latestCart = window.getCartSnapshot();

      setCartItems(latestCart);
    }

    const cleanUp = listen(EVENTS.CART_UPDATE, (updateCart: any) => {
      setCartItems(updateCart);
    });

    return cleanUp;
  }, []);
  return (
    <div>
      <CartList
        cartItems={cartItems ?? []}
        onIncrese={(id: number) => {
          handleIncrese(id);
        }}
        onDecrese={(id: number) => {
          handleDecrease(id);
        }}
        onRemove={(id: number) => {
          handleRemove(id);
        }}
      />
    </div>
  );
};

export default CartApp;
