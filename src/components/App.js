import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import Chat from "./Chat";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}));

export function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppHeader />
      <Sidebar />
      <Chat />
    </div>
  );
}
