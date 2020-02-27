import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import TextField from "@material-ui/core/TextField";
import CssBaseline from '@material-ui/core/CssBaseline';
import AddIcon from '@material-ui/icons/Add';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Fab from "@material-ui/core/Fab";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import classnames from 'classnames';

import { ApiService } from "../services/api-service";



const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.default,
  },
  appBar: {
    width: `calc(100% - 320px)`,
  },
  drawerHeader: {
    position: 'relative',
    width: 320,
  },
  drawerPaper: {
    position: 'static',
    overflow: 'hidden',
  },
  chatLayout: {
    padding: theme.spacing(4),
    paddingTop: 100,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflow: 'auto',
  },
  messagesList: {
    height: 'calc(100% - 64px)',
    marginBottom: theme.spacing(4),
  },
  messageItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0.5, 0),
    '& .MuiPaper-root': {
      maxWidth: '70%',
      margin: theme.spacing(0, 1),
      padding: theme.spacing(1, 1.5),
    },
    '& .MuiAvatar-root': {
      margin: theme.spacing(0, 1),
    },
    '& .MuiTypography-caption': {
      fontWeight: '300',
      color: '#B0B0B0',
    },
    '& .MuiTypography-body1': {
      fontWeight: '300',
      fontSize: '0.9rem',
    },
  },
  messageItemFromMe: {
    flexDirection: 'row-reverse',
    '& .MuiPaper-root': {
      backgroundColor: '#F9ECFF',
    },
  },
  messageInput: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(2)
    },
  },
  newChatBtn: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing(3),
    bottom: theme.spacing(10),
  },
  toolbar: theme.mixins.toolbar,
  textField: {
    '& .MuiInputBase-input': {padding: theme.spacing(2.8, 2)},
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export function App() {
  const classes = useStyles();
  const chats = ApiService.getChats();
  const messages = ApiService.getMessages();

  const renderListItem = (item, idx) => (
    <ListItem key={idx} button>
      <ListItemAvatar>
        <Avatar className={classes.purple}>{item.title[0]}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary="8 days ago" />
    </ListItem>
  );

  const renderMessageItem = (item, idx) => {
    const isMessageFromMe = item.sender === 'me';

    return (
      <div key={idx} className={classnames(classes.messageItem, isMessageFromMe ? classes.messageItemFromMe : '')}>
        <Avatar>{item.sender[0]}</Avatar>
        <Paper>
          <Typography variant="caption">{item.sender}</Typography>
          <Typography variant="body1">{item.content}</Typography>
        </Paper>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            React Chat
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer className={classes.drawerHeader} variant="permanent" classes={{paper: classes.drawerPaper,}}>
        <TextField className={classes.textField} placeholder="Search Chats" />
        <List className={classes.chatsList}>
          {chats.map(renderListItem)}
        </List>
        <Fab className={classes.newChatBtn} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>

      <main className={classes.chatLayout}>
        <SimpleBar className={classes.messagesList}>
          {messages.map(renderMessageItem)}
        </SimpleBar>

        <Paper className={classes.messageInput} elevation={6}>
          <Input fullWidth placeholder="Type your message..." />
        </Paper>

      </main>

    </div>
  );
}
