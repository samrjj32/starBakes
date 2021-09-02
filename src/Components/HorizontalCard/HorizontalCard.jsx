import React from "react";
import useStyles from "./styles";
import { Grid, CircularProgress } from "@material-ui/core";
import { useParams, useLocation } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Typography,
  Avatar,
} from "@material-ui/core/";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";
import { useTheme, useMediaQuery } from "@material-ui/core";

function HorizontalCard(props) {
  const classes = useStyles();
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const theme = useTheme();
  const showText = useMediaQuery("(max-width:600px)");

  console.log(showText, "haha");

  return (
    <div>
      <Grid container alignItems="center">
        <Card className={classes.card}>
          <Grid item xs={4} sm={2}>
            <CardMedia
              className={classes.media}
              image={props.data.url}
              title={props.data.name}
            />
          </Grid>

          <Grid item xs={12} sm={10}>
            <CardContent>
              <Typography
                className={showText ? classes.typoxs : ""}
                component="h6"
                variant="h6"
              >
                {props.data.name}
              </Typography>
              <Typography
                className={showText ? classes.detailsxs : classes.details}
                component="subtitle2"
                variant="subtitle2"
              >
                {props.data.details}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                price :{props.data.price} rs
              </Typography>

              <div className={classes.icons}>
                <Chip
                  color="primary"
                  size="small"
                  label={props.data.discount}
                />
                {props.cart ? (
                  <span onClick={props.removeFromCart}>
                    <DeleteIcon />
                  </span>
                ) : (
                  <span onClick={props.saveToCart}>
                    <AddShoppingCartIcon />
                  </span>
                )}
              </div>
            </CardContent>
          </Grid>
        </Card>
      </Grid>
    </div>
  );
}

export default HorizontalCard;
