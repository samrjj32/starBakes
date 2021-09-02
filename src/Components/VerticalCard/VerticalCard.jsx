import React from "react";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";

function VerticalCard({ data }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <Link
          to={`/details/${data.name}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <CardMedia className={classes.media} image={data.url} title={"Cake"}>
            <div className={classes.overlay}>
              <Typography variant="h6">{data.name}</Typography>
              <Typography varient="body2"></Typography>
            </div>
          </CardMedia>
        </Link>
      </Card>
    </div>
  );
}

export default VerticalCard;
