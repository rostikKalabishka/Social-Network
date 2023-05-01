import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItems/MessageItems";
import { Button } from "@mui/material";
import React from "react";

const Dialogs = ({ UsersData, UserMessageData }) => {
  const usersItem = UsersData.map((item) => {
    return <DialogItem id={item.id} name={item.name} />;
  });
  const UserMessagesItem = UserMessageData.map((item) => {
    return (
      <MessageItem id={item.id} message={item.message} unread={item.unread} />
    );
  });
  const newMessageElement = React.createRef();

  const addMessage = () => {
    const text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{usersItem}</div>
      <div className={styles.messages}>{UserMessagesItem}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <Button onClick={addMessage} variant="contained" disableElevation>
          Add Message
        </Button>
      </div>
    </div>
  );
};

export default Dialogs;
