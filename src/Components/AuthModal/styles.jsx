import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px",
    width: "400px",
  },
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },

  success: {
    display: "flex",
    alignItems: "center",

    flexDirection: "column",
  },

  icon: {
    fontSize: "25px",
    marginBottom: "20px",
  },
  authActions: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width:"100%"
  },

  btns:{
      width:"100%",
    display: "flex",
    justifyContent: "space-evenly",
  }
}));
