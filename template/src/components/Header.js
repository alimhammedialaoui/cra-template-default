import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {}
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p>Header</p>
    </div>
  );
}

export default Header;
