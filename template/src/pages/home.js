import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {}
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
    </div>
  );
}

export default Home;
