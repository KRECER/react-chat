import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import {titleInitials} from "../utils/title-initials";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import PropTypes from 'prop-types';
import classnames from 'classnames';

const config = {
  sender: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isMessageFromMe: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    messageItem: PropTypes.string.isRequired,
    messageItemFromMe: PropTypes.string.isRequired,
  }),
};

const styles = (theme) => ({
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
});

const MessageItem = ({ classes, sender, content, isMessageFromMe }) => {
  const messageItemClass = classnames(classes.messageItem, isMessageFromMe ? classes.messageItemFromMe : '');

  return (
    <div className={messageItemClass}>
      <Avatar>{titleInitials(sender)}</Avatar>
      <Paper>
        <Typography variant="caption">{sender}</Typography>
        <Typography variant="body1">{content}</Typography>
      </Paper>
    </div>
  );
};

MessageItem.propTypes = config;

export default withStyles(styles)(MessageItem);
