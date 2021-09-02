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
import { useParams } from "react-router-dom";
import { AddToCartContext } from "../../Contexts/CartContext";
import ModalComponent from "../../Components/Modal/Modal";

function Details({ setCurrentId }) {
  const cartValue = useContext(AddToCartContext);
  const classes = useStyles();
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [placed, setPlaced] = useState(false);
  const [product, setProduct] = useState({});

  let newData = data.filter((item) => item.type === id);

  const handleSaveToCart = (item) => {
    setProduct(item);
    openModal();
  };

  const closeModal = () => {
    setOpen(false);
    setPlaced(false);
  };

  const openModal = () => {
    setOpen(true);
    setPlaced(false);
  };

  const placeOrder = () => {
    cartValue.addToCart(product);
    setPlaced(true);
  };

  return (
    <section>
    <div>
      <div className={classes.heading}>
        <h3>
          {id}
        </h3>
      </div>
      <Grid
        className={classes.mainContainer}
        container
        alignItems="stretch"
       // spacing={1}
      >
        {newData.map((post) => (
          <Grid key={post} item xs={8} sm={12} className={classes.cover}>
            <HorizontalCard
              data={post}
              saveToCart={() => handleSaveToCart(post)}
              cart={false}
            />
          </Grid>
        ))}
      </Grid>
      <ModalComponent
        handleClose={closeModal}
        handleOpen={openModal}
        open={open}
        handlePlaceOrder={placeOrder}
        placed={placed}
      />
    </div>
    </section>
  );
}

export default Details;
