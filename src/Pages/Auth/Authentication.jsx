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
import { db, auth } from "../../config/firebase";

function Authentication() {
  let history = useHistory();

  const userValue = useContext(UserContext);
  const classes = useStyles();
  const [userdata, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: false, password: false });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
    setError({ ...error, [name]: validation(name, value) });
  };

  const validation = (name, value) => {
    let validateResults;
    switch (name) {
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

  // const handleSave = () => {
  //   const { email, password } = userdata;

  //   if (username && password) {
  //     console.log(userdata, "user has been registered");
  //     userValue.adduser(userdata);
  //     setTimeout(() => ToPath(), 1000);
  //   } else {
  //     setError({
  //       ...error,
  //       username: !username ? true : false,
  //       password: !password ? true : false,
  //     });
  //   }
  // };

  const login = (e) => {
    e.preventDefault();
    const { email, password } = userdata;
    if (email && password) {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
          // Signed in
          const user = userAuth.user;
          userValue.adduser({
            name: user.displayName,
            email: user.email,
            userId: user.uid,
          });

         

          setTimeout(() => ToPath(), 1000);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.message);
          setErrorMessage(error.message);
        });
    } else {
      setError({
        ...error,
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
        <h3>{"please Login"}</h3>
      </div>
      <Card className={classes.card}>
        <div className={classes.content}>
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
            onClick={login}
          >
            Login
          </Button>
        </div>
        <span className={classes.info}>
          <p>Not a member </p>
          <Link to="/register">
            {" "}
            <p className={classes.infotext}> Register </p>
          </Link>
        </span>
      </Card>
    </div>
  );
}

export default Authentication;
