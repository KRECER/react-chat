import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar/AppBar";

const styles = (theme) => ({
  appBar: {
    width: `calc(100% - 320px)`,
  },
});

const AppHeader = ({ classes }) => (
  <AppBar className={classes.appBar}>
    <Toolbar>
      <Typography variant="h6" noWrap>
        React Chat
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(AppHeader);
