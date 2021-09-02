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
          <CardMedia className={classes.root} image={data.url}>
            <div className={classes.overlay}>
              <h2>{data.name}</h2>
            </div>
          </CardMedia>
        </Link>
      </Card>
    </div>
  );
}

export default VerticalCard;
