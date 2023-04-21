import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css";
import { useCallback } from "react";

const Dialogs = ({}) => {
  const selectedLink = useCallback(
    (select) => (select.isActive ? styles.active : styles.item),
    []
  );
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>
          <NavLink to="/messages/1">Anton</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/2" className={selectedLink}>
            Anton2
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/3" className={selectedLink}>
            Anton3
          </NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/messages/4" className={selectedLink}>
            Anton4
          </NavLink>
        </div>
      </div>
      <div className={styles.massages}>
        <div className={styles.massageItem}>1</div>
        <div className={styles.massageItem}>2</div>
        <div className={styles.massageItem}>3 </div>
      </div>
    </div>
  );
};

export default Dialogs;
