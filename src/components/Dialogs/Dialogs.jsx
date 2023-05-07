import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItems/MessageItems";
import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  AddMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/messagePageReducer";

const Dialogs = ({ messageText, UsersData, UserMessageData, dispatch }) => {
  const [newMessage, setNewMessage] = useState(messageText);
  const usersItem = UsersData.map((item) => {
    return <DialogItem id={item.id} name={item.name} />;
  });
  const UserMessagesItem = UserMessageData.map((item) => {
    return (
      <MessageItem id={item.id} message={item.message} unread={item.unread} />
    );
  });

  const addMessage = () => {
    const active = AddMessageActionCreator();
    dispatch(active);
  };
  const onChangeMessage = (e) => {
    let text = e.target.value;
    setNewMessage(text);
    const active = onMessageChangeActionCreator(text);
    dispatch(active);
    console.log(newMessage);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{usersItem}</div>
      <div className={styles.messages}>
        <div>{UserMessagesItem}</div>
      </div>
      <div>
        <div>
          <textarea
            placeholder="Enter your message"
            onChange={(e) => onChangeMessage(e)}
            value={messageText}
          ></textarea>
        </div>
        <div>
          <Button onClick={addMessage} variant="contained" disableElevation>
            Add Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
