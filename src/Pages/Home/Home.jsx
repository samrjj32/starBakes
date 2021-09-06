import React, { useEffect, useState } from "react";

import useStyles from "./styles";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";
import data from "../../data/productData";

import { db } from "../../config/firebase";

const getUniqueTypes = (item, type) => {
  return [...new Set(item.map((item) => item[type]))];
};

function Home({ setCurrentId }) {
  const classes = useStyles();

  const [newproducts, setProducts] = useState([]);
  const [productInfo, setproductInfo] = useState({});

  let products = getUniqueTypes(data, "type");

  useEffect(() => {
    db.collection("categorys").onSnapshot((snapshot) =>
      setProducts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  // const submitData = (e) => {
  //   e.preventDefault();
  //   if (productInfo.name) {
  //     db.collection("products").add(productInfo);
  //   }
  // };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setproductInfo({ ...productInfo, [name]: value });
  };

  return (
    <div className={classes.main}>
      <div className={classes.heading}>
          <h3>{"Deals of the Day"}</h3>
        </div>
      <Grid
        className={classes.mainContainer}
        container
        //  alignItems="stretch"
        // spacing={2}
      >
        {newproducts.map((post) => (
          <Grid key={post} xs={8} sm={3} className={classes.cover}>
            <VerticalCard data={post} />
          </Grid>
        ))}
      </Grid>

      {/* <div>
          <input name="product_id" onChange={handleChangeInput} placeholder="id"></input>
          <input name="type" onChange={handleChangeInput} placeholder="type"></input>
          <input name="name" onChange={handleChangeInput} placeholder="name"></input>
          <input name="details" onChange={handleChangeInput} placeholder="details"></input>
          <textarea name="url" onChange={handleChangeInput} placeholder="url"></textarea>
          <input name="price" onChange={handleChangeInput} placeholder="price"></input>
          <input name="discount" onChange={handleChangeInput} placeholder="discount"></input>
          
         

          <button onClick={submitData}>save</button>
        </div> */}
    </div>
  );
}

export default Home;

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
