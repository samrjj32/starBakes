import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function UserProvider(props) {

  const info = localStorage.getItem("user");
  let userData = JSON.parse(info);
  const [user, setuser] = useState(null);

  useEffect(() => {
    setuser(userData);
  }, []);

  const adduser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setuser(data);
  };


  const removeUser = (data) => {
    localStorage.removeItem("user");
    setuser(null);
  };

  console.log(user, info, "at user context");

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
