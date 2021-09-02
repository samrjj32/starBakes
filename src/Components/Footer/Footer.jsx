import React from "react";
import useStyles from "./styles";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <ul className={classes.content}>
        <li>ABOUT US</li>
        <li>CUSTOMER SERVICE</li>
        <li>SHOP</li>
        <li>HELP</li>
      </ul>
      <p className={classes.tradeMark}>
        2021 Starbacks Coffee Company. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
