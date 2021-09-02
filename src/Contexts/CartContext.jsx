import React, { createContext, useState } from "react";

export const AddToCartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (data) => {
    console.log(data, "here at context");

    setCartItems((prev) => [...prev, data]);
  };

  const remove = (data) => {
    let check = cartItems.filter((item) => item.id !== data.id);

    console.log(data, check, "removed from cart");

     setCartItems(check);
  };

  return (
    <AddToCartContext.Provider
      value={{
        cartItems,
        addToCart,
        remove,
      }}
    >
      {props.children}
    </AddToCartContext.Provider>
  );
}

export default CartProvider;
