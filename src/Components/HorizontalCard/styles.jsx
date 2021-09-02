import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    display: "flex",
    // width: "100%",
    height: "100%",
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    // backgroundBlendMode: "darken",
  },

  card: {
    display: "flex",
    // flexDirection: 'column',
    // justifyContent: "space-between",
    borderRadius: "15px",
    height: "150px",
    width: "500px",
    position: "relative",
  },

  details: {
    fontSize: "12px",
  },
  content: {
    // flex: "1 0 auto",
  },
  icons: {
    display: "flex",
    justifyContent:"space-between"
  },

  typoxs:{
    fontSize:"14px",
    fontWeight:"700"
    
  },
  detailsxs:{
    fontSize: "9px"
  }

});
