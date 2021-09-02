import React, { useContext } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Modal,
  Grid,
  Typography,
  Avatar,
  Fade,
  Backdrop,
} from "@material-ui/core/";
import useStyles from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PlaceIcon from "@material-ui/icons/Place";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link, useHistory, useLocation } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { UserContext } from "../../Contexts/UserContext";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CloseIcon from "@material-ui/icons/Close";
import DoneAllIcon from '@material-ui/icons/DoneAll';
function AuthModal(props) {
  let history = useHistory();

  const userValue = useContext(UserContext);

  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.open}
      onClose={props.handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.open}>
        <div className={classes.paper}>
          <Grid item xs={12} sm={12} className={classes.mainContainer}>
            <div className={classes.authActions}>
              {props.logotSuccess ? (
                <>
                  <p> success!</p>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<DoneAllIcon />}
                    onClick={props.handleClose}
                  >
                    ok
                  </Button>
                </>
              ) : (
                <>
                  <p>Are you sure !</p>

                  <span className={classes.btns}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<CloseIcon />}
                      onClick={props.handleClose}
                    >
                      Back
                    </Button>

                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<LockOpenIcon />}
                      onClick={props.handleLogOut}
                    >
                      Logout
                    </Button>
                  </span>
                </>
              )}
            </div>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

export default AuthModal;
