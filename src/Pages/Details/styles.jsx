import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
     alignItems: "center",
     flexDirection:"column"
  },
  cover: {
    margin: "20px",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    marginBottom:"20px"
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: "center",
  },
}));
