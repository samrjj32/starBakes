import React, { useEffect, useState, useContext } from "react";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { AddToCartContext } from "../../Contexts/CartContext";
import { UserContext } from "../../Contexts/UserContext";
import Typography from "@material-ui/core/Typography";
import AuthModal from "../AuthModal/AuthModal";
import { useHistory, useLocation } from "react-router-dom";

import "./header.css";

// import { AddToCartContext } from "../Context/cartContext";

// const burger = document.querySelector(".burger-menu");
// const nav = document.querySelector(".nav-bottom");

function Header() {
  let history = useHistory();

  const [nav, SetNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [logotSuccess, setLogotSuccess] = useState(false);

  const cartValue = useContext(AddToCartContext);
  const userValue = useContext(UserContext);

  const showMenu = () => {
    SetNav((prev) => !prev);
  };


  const handleLogout = () => {
    userValue.removeUser();
  };

  const logoutModal = () => {
    openModal();
  };

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const submitLogout = () => {
    userValue.removeUser();
    setLogotSuccess(true);
    // closeModal();
  };
  const toLogin = () => {
    ToPath();
    showMenu();
   
  };

  const ToPath = () => {
    history.push("/auth");
  };

  return (
    <div className="navbar" id="nav">
      <div className="nav-top">
        <div className="nav-left">
          <div className={`burger-menu `} onClick={showMenu}>
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
          <Link to="/">
            <li className="logo">StarBacks</li>
          </Link>
        </div>

        <div className="nav-right">
          <Typography className="name" variant="body2" noWrap>
            {userValue.user ? ` hey, ${userValue.user.name}` : ""}
          </Typography>
          {userValue.user ? (
            <li>
              <PermIdentityOutlinedIcon />
            </li>
          ) : (
            ""
          )}
          {userValue.user ? (
            <li>
              <Link to="/cart">
                <ShoppingCartOutlinedIcon />
              </Link>
              <span className="cart-count">{cartValue.cartItems.length}</span>
            </li>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`nav-bottom ${nav ? "burger-active" : ""}`}>
        <ul>
          <li>
            {" "}
            <span>ADDRESS</span>
          </li>
          <li>
            <span>SUPPORT</span>
          </li>
          <li>
            <span>ABOUT</span>
          </li>
          <li>
            {userValue.user ? (
              <span className="link" onClick={logoutModal}>
                LOGOUT
              </span>
            ) : (
              //   <Link to="/auth">
              <span className="link" onClick={toLogin}>
                LOGIN
              </span>
              //   </Link>
            )}
          </li>
        </ul>
      </div>
      <AuthModal
        handleClose={closeModal}
        handleOpen={openModal}
        open={open}
        handleLogOut={submitLogout}
        logotSuccess={logotSuccess}
      />
    </div>
  );
}

export default Header;
