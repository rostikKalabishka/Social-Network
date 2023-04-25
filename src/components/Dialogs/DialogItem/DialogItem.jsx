import { NavLink } from "react-router-dom";
import styles from "./DialogItem.module.css";
import avatar from "../../../assets/img/avatar.webp";
const DialogItem = ({ name, id }) => {
  return (
    <div className={styles.dialog}>
      <img src={avatar} />
      <NavLink to={`/messages/${id}`}>{name}</NavLink>
    </div>
  );
};
export default DialogItem;
