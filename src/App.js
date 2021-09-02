import React, { useEffect, useState } from "react";
import Routes from "./routes";
import CartProvider from "./Contexts/CartContext";
import UserProvider from "./Contexts/UserContext";
function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Routes />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
