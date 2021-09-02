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
import LockOpenIcon from '@material-ui/icons/LockOpen';
import CloseIcon from '@material-ui/icons/Close';
function ModalComponent(props) {
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
            <span onClick={props.handleClose} className={classes.closeBtn}>
              <CloseIcon/>
            </span>
            {!userValue.user ? (
              <div className={classes.authActions} >
                <p>please login to continue</p>
                <Link
                    to="/auth"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<LockOpenIcon />}
                    >
                      login
                    </Button>
                  </Link>
              </div>
            ) : props.placed ? (
              <div className={classes.success}>
                <h2 id="transition-modal-title">order Placed Success</h2>
                <CheckCircleIcon color="secondary" />
              </div>
            ) : (
              <>
                <h2 id="transition-modal-title">Click To continue</h2>

                <div className={classes.icon}>
                  <ShoppingCartIcon color="secondary" />
                </div>

                <div className={classes.actions}>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button
                      variant="contained"
                      color="default"
                      className={classes.button}
                      startIcon={<StorefrontIcon />}
                    >
                      continue
                    </Button>
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    startIcon={<PlaceIcon />}
                    onClick={props.handlePlaceOrder}
                  >
                    Place Order
                  </Button>
                </div>
              </>
            )}
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
}

export default ModalComponent;
