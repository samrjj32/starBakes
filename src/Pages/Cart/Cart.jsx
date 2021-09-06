import React, { useEffect, useState, useContext } from "react";

import useStyles from "./styles";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";
import HorizontalCard from "../../Components/HorizontalCard/HorizontalCard";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Typography,
  Avatar,
} from "@material-ui/core/";
import data from "../../data/productData";
import { AddToCartContext } from "../../Contexts/CartContext";

function Cart({ setCurrentId }) {
  const cartValue = useContext(AddToCartContext);
  const classes = useStyles();

  const removeFromCart = (item) => {
    cartValue.remove(item);
  };

  return (
    <div  className={classes.main}>
      <div className={classes.heading}>
        <h3>{"Cart Items"}</h3>
      </div>
      {cartValue.cartItems.length > 0 ? (
        <Grid
          className={classes.mainContainer}
          container
          alignItems="stretch"
          // spacing={1}
        >
          {cartValue.cartItems.map((post) => (
            <Grid key={post} item xs={8} sm={12} className={classes.cover}>
              <HorizontalCard
                data={post}
                removeFromCart={() => removeFromCart(post)}
                cart={true}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <span className={classes.emptyMessage}>
          <p>empty! please add some Products</p>
        </span>
      )}
    </div>
  );
}

export default Cart;
