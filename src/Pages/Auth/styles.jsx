import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    display: "flex",
    // justifyContent: "center",
  },
  main: {
    height:"100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
   
  },

  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "15px",
    height: "300px",
    width: "70%",
    padding: "10px",
    // position: "relative",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: "20px",
    height: "100%",
    width: "60%",
  },
  actions: {},
  info: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    fontSize: "13px",
    alignItems: "center",
  },
  infotext: {
    marginLeft: "10px",
    color: "blue",
    fontSize: "14px",
    fontWeight: "800",
  },
  dbmessage: {
    color: "red",
    fontSize: "14px",
    fontWeight: "800",
  },
});
