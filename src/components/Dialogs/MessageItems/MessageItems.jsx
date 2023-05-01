import styles from "./MessageItems.module.css";
const MessageItem = ({ message, unread }) => {
  return (
    <div className={styles.messageItem}>
      {message} <span>{unread}</span>
    </div>
  );
};

export default MessageItem;
