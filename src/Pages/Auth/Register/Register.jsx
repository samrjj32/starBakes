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
import { UserContext } from "../../../Contexts/UserContext";
import { db, auth } from "../../../config/firebase";

function Register() {
  let history = useHistory();

  const userValue = useContext(UserContext);
  const classes = useStyles();
  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    name: false,
    email: "",
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
    setError({ ...error, [name]: validation(name, value) });
  };

  const validation = (name, value) => {
    let validateResults;
    switch (name) {
      case "name": {
        validateResults = value ? false : true;
        break;
      }
      case "email": {
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
    const { name, email, password } = userdata;

    if (name && password) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          userAuth.user
            .updateProfile({
              displayName: name,
            })
            .then((data) => {
              userValue.adduser({
                name: name,
                email: userAuth.user.email,
                userId: userAuth.user.uid,
              });
            });
          setTimeout(() => ToPath(), 1000);
        })
        .catch((error) => setErrorMessage(error.message));

      //   setTimeout(() => ToPath(), 1000);
    } else {
      setError({
        ...error,
        name: !name ? true : false,
        email: !email ? true : false,
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
        <h3>{"please Register"}</h3>
      </div>
      <Card className={classes.card}>
        <div className={classes.content}>
          <TextField
            error={error.username}
            id="outlined-error-helper-text"
            label="name"
            name="name"
            // defaultValue="Hello World"
            helperText={`${error.username ? "name cannot be empty." : ""}`}
            variant="outlined"
            onChange={handleChangeInput}
            inputProps={{
              autoComplete: "off",
            }}
          />
          <TextField
            error={error.username}
            id="outlined-error-helper-text"
            label="email"
            name="email"
            // defaultValue="Hello World"
            helperText={`${error.username ? "email cannot be empty." : ""}`}
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
        {errorMessage ? (
          <span>
            <p className={classes.dbmessage}>{errorMessage}</p>
          </span>
        ) : (
          ""
        )}

        <div className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            // startIcon={<PlaceIcon />}
            onClick={handleSave}
          >
            Register
          </Button>
        </div>
        <span className={classes.info}>
          <p>already a member </p>
          <Link to="/auth">
            {" "}
            <p className={classes.infotext}> Login </p>
          </Link>
        </span>
      </Card>
    </div>
  );
}

export default Register;
