import React, {useEffect, useState} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {ApiService} from "../services/api-service";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import MessageItem from "./MessageItem";

const styles = (theme) => ({
  chatLayout: {
    padding: theme.spacing(4),
    paddingTop: 100,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  messagesList: {
    height: 'calc(100% - 64px)',
    marginBottom: theme.spacing(4),
  },
  messageInput: {
    '& .MuiInputBase-input': {
      padding: theme.spacing(2)
    },
  },
});

const Chat = ({ classes }) => {
  const [messages, setMessages] = useState(ApiService.getMessages());
  const messagesListRef = React.createRef();

  useEffect(() => {
    messagesListRef.current.scrollTop = messagesListRef.current.scrollHeight;
  }, [messages]);

  const renderMessageItem = (item, idx) => {
    const isMessageFromMe = item.sender === 'me';
    return <MessageItem key={idx} {...item} isMessageFromMe={isMessageFromMe}/>;
  };

  return (
    <main className={classes.chatLayout}>
      <SimpleBar className={classes.messagesList} scrollableNodeProps={{ ref: messagesListRef }}>
        {messages.map(renderMessageItem)}
      </SimpleBar>
      <Paper className={classes.messageInput} elevation={6}>
        <Input fullWidth placeholder="Type your message..." />
      </Paper>
    </main>
  );
};

export default withStyles(styles)(Chat);
