import React, { createContext, useState, useEffect, useContext } from "react";
import { db, auth } from "../config/firebase";
import firebase from "firebase";
import { useCollection } from "react-firebase-hooks/firestore";

export const AddToCartContext = createContext();

function CartProvider(props) {
  const [cartItems, setCartItems] = useState([]);
  let id = localStorage.getItem("userId");
  useEffect(() => {
    let id = localStorage.getItem("userId");
    if (id) {
      // var docRef = db.collection("users").doc(id).collection("cart");

      // docRef.get().then((doc) => {
      //     if (doc) {
      //         console.log("Document data:", doc);
      //     } else {
      //         // doc.data() will be undefined in this case
      //         console.log("No such document!");
      //     }
      // }).catch((error) => {
      //     console.log("Error getting document:", error);
      // });

      db.collection("users")
        .doc(id)
        .onSnapshot((doc) => {
          setCartItems(doc.data().cart);
          console.log("Current data: ", doc.data());
        });
    }
  }, []);

  const addToCart = (data) => {
    setCartItems((prev) => [...prev, data]);
    let items = [...cartItems, data];
    let id = localStorage.getItem("userId");

    db.collection("users")
      .doc(id)
      .set({
        cart: items,
      })
      // .set({
      //   cart: firebase.firestore.FieldValue.arrayUnion(data),
      // })

      .then((obj) => {
        console.log(obj, "prod add to cart");
      });

    // db.collection("users")
  };

  const remove = (data) => {
    let check = cartItems.filter((item) => item.id !== data.id);

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
