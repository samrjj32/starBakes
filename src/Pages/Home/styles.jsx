import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  main: {
    height: "100vh",
  },
  cover: {
    margin: "20px",
  },
  mainContainer: {
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
  heading: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
  },
}));
