import styles from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import MassageItem from "./MassageItems/MassageItems";

const Dialogs = ({ UsersData, UserMassageData }) => {
  const usersItem = UsersData.map((item) => {
    return <DialogItem id={item.id} name={item.name} />;
  });
  const UserMassagesItem = UserMassageData.map((item) => {
    return (
      <MassageItem id={item.id} massage={item.massage} unread={item.unread} />
    );
  });

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>{usersItem}</div>
      <div className={styles.massages}>{UserMassagesItem}</div>
    </div>
  );
};

export default Dialogs;
