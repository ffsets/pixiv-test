import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PixivHome from "./PixivHome";

const useStyles = makeStyles({
  root: {},
  loginPanel: {
    padding: "2em"
  }
});

function PixivLoading(props) {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.loginPanel}>
        <Typography>Pixiv loading...</Typography>
      </Paper>
    </div>
  );
}

export default props => {
  if (props.logged) {
    return <PixivHome pixiv={props.pixiv} />;
  }

  return <PixivLoading />;
};
