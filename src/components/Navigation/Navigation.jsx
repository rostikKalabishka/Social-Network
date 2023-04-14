import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={`{styles.item} {styles.active}`}>
        <Link to="/profile">Profile</Link>
      </div>
      <div className={`{styles.item} {styles.active}`}>
        <Link to="/messages">Messages</Link>
      </div>
      <div className={styles.item}>
        <Link to="/news">News</Link>
      </div>
      <div className={styles.item}>
        <Link to="/music">Music</Link>
      </div>
      <div className={`{styles.item} {styles.active}`}>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
};

export default Navigation;
