import React, { useState, useContext } from "react";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core/";
import { FormatColorResetRounded } from "@material-ui/icons";
import { UserContext } from "../../Contexts/UserContext";

function Authentication() {
  let history = useHistory();

  const userValue = useContext(UserContext);
  const classes = useStyles();
  const [userdata, setUserData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: false, password: false });

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
    setError({ ...error, [name]: validation(name, value) });
  };

  const validation = (name, value) => {
    let validateResults;
    switch (name) {
      case "username": {
        validateResults = value ? false : true;
        break;
      }
      case "password": {
        validateResults = value ? false : true;
      }

      default:
        break;
    }

    return validateResults;
  };

  const handleSave = () => {
    const { username, password } = userdata;

    if (username && password) {
      console.log(userdata, "user has been registered");
      userValue.adduser(userdata);
      setTimeout(() => ToPath(), 1000);
    } else {
      setError({
        ...error,
        username: !username ? true : false,
        password: !password ? true : false,
      });
    }
  };
  const ToPath = () => {
    history.push("/");
  };
  return (
    <div className={classes.main}>
      <div>
        <h3>{"please Login"}</h3>
      </div>
      <Card className={classes.card}>
        <div className={classes.content}>
          <TextField
            error={error.username}
            id="outlined-error-helper-text"
            label="name"
            name="username"
            // defaultValue="Hello World"
            helperText={`${error.username ? "name cannot be empty." : ""}`}
            variant="outlined"
            onChange={handleChangeInput}
            inputProps={{
              autoComplete: "off",
            }}
          />
          <TextField
            error={error.password}
            id="outlined-error-helper-text"
            label="password"
            name="password"
            type="password"
            // defaultValue="Hello World"
            helperText={`${error.password ? "password cannot be empty." : ""}`}
            variant="outlined"
            onChange={handleChangeInput}
            inputProps={{
              autoComplete: "off",
            }}
          />
        </div>
        <span className={classes.info}>
         <p>**you can use any inputs, dont leave it empty!</p>
          
        </span>
        <div className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            // startIcon={<PlaceIcon />}
            onClick={handleSave}
          >
            Login
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Authentication;
