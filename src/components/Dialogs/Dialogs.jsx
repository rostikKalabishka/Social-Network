import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItems/MessageItems";
import { Button } from "@mui/material";
import React, { useState } from "react";

const Dialogs = ({ addMessage, onChangeMessage, messagePage }) => {
  const [newMessage, setNewMessage] = useState(messagePage.messageText);
  const usersItem = messagePage.UsersData.map((item) => {
    return <DialogItem id={item.id} key={item.id} name={item.name} />;
  });
  const UserMessagesItem = messagePage.UserMessageData.map((item, index) => {
    return (
      <MessageItem
        id={item.id}
        message={item.message}
        key={item.id}
        unread={item.unread}
      />
    );
  });

  const addMessages = () => {
    addMessage();
  };
  const onChangeMessages = (e) => {
    let text = e.target.value;
    setNewMessage(text);
    onChangeMessage(text);
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
            onChange={(e) => onChangeMessages(e)}
            value={messagePage.messageText}
          ></textarea>
        </div>
        <div>
          <Button onClick={addMessages} variant="contained" disableElevation>
            Add Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
