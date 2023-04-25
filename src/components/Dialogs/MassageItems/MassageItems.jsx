import styles from "./MassageItems.module.css";
const MassageItem = ({ massage, unread }) => {
  return (
    <div className={styles.massageItem}>
      {massage} <span>{unread}</span>
    </div>
  );
};

export default MassageItem;
