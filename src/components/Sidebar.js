import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {titleInitials} from "../utils/title-initials";
import ListItemText from "@material-ui/core/ListItemText";
import {ApiService} from "../services/api-service";

const styles = (theme) => ({
  drawerHeader: {
    position: 'relative',
    width: 320,
  },
  drawerPaper: {
    position: 'static',
    overflow: 'hidden',
  },
  chatsList: {
    height: 'calc(100% - 56px)',
    overflow: 'auto',
  },
  newChatBtn: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing(3),
    bottom: theme.spacing(10),
  },
  textField: {
    '& .MuiInputBase-input': {padding: theme.spacing(2.8, 2)},
  },
});

const Sidebar = ({ classes }) => {
  const chats = ApiService.getChats();

  const renderListItem = (item, idx) => (
    <ListItem key={idx} button>
      <ListItemAvatar>
        <Avatar className={classes.purple}>{titleInitials(item.title)}</Avatar>
      </ListItemAvatar>
      <ListItemText primary={item.title} secondary="8 days ago" />
    </ListItem>
  );

  return (
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
  );
};

export default withStyles(styles)(Sidebar);
