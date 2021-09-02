import React, { useEffect } from "react";

import useStyles from "./styles";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";

import data from "../../data/productData";

const getUniqueTypes = (item, type) => {
  return [...new Set(item.map((item) => item[type]))];
};

function Posts({ setCurrentId }) {
  const classes = useStyles();

  let products = getUniqueTypes(data, "type");

  console.log(products);

  return (
    <section>
    <div className={classes.main}>
      <div className={classes.heading}>
        <h3>
          {"Deals of the Day"}
        </h3>
      </div>
      <Grid
        className={classes.mainContainer}
         container
        //  alignItems="stretch"
        // spacing={2}
      >
        {menus.map((post) => (
          <Grid key={post}  xs={8} sm={3} className={classes.cover} >
            <VerticalCard data={post} />
          </Grid>
        ))}
      </Grid>
    </div>
    </section>
  );
}

export default Posts;

let menus = [
  {
    name: "Cakes",
    url: "https://images.pexels.com/photos/6341564/pexels-photo-6341564.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "IceCreams",
    url: "https://images.pexels.com/photos/4652682/pexels-photo-4652682.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
  {
    name: "Sweets",
    url: "https://images.pexels.com/photos/4686962/pexels-photo-4686962.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  },
];
