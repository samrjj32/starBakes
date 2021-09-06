import React, { createContext, useState, useEffect } from "react";
import { db, auth } from "../config/firebase";

export const UserContext = createContext();

function UserProvider(props) {
  // const info = localStorage.getItem("user");
  // let userData = JSON.parse(info);
  const [user, setuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
    
      if (userAuth) {
        setuser({
          name: userAuth.displayName,
          email: userAuth.email,
          userId: userAuth.uid,
        });
        localStorage.setItem("userId", userAuth.uid);
      } else {
        console.log("not logged in");
      }
    });

    // setuser(userData);
  }, []);

  const adduser = (data) => {
    // localStorage.setItem("user", JSON.stringify(data));
    setuser(data);
  };

  const removeUser = () => {
    auth.signOut().then((data) => {
      localStorage.removeItem("userId");
      setuser(null);
    });
  };

  
  return (
    <UserContext.Provider
      value={{
        user,
        adduser,
        removeUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
