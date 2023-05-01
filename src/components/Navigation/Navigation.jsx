import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useCallback } from "react";

const Navigation = ({ friends }) => {
  const selectedLink = useCallback(
    (select) => (select.isActive ? styles.active : styles.item),
    []
  );

  const friendsUser = friends.map(({ name, online }) => {
    return (
      <div>
        {name} {online}
      </div>
    );
  });

  return (
    <nav className={styles.navigation}>
      <div className={`${styles.item} `}>
        <NavLink to="/profile" className={selectedLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${styles.item} `}>
        <NavLink to="/messages" className={selectedLink}>
          Messages
        </NavLink>
      </div>
      <div className={`${styles.item} `}>
        <NavLink to="/news" className={selectedLink}>
          News
        </NavLink>
      </div>
      <div className={`${styles.item} `}>
        <NavLink to="/music" className={selectedLink}>
          Music
        </NavLink>
      </div>
      <div className={`${styles.item} `}>
        <NavLink to="/settings" className={selectedLink}>
          Settings
        </NavLink>
      </div>
      <div className={`${styles.item} `}>
        <NavLink to="/friends" className={selectedLink}>
          Friends
        </NavLink>
      </div>
      <div>{friendsUser}</div>
    </nav>
  );
};

export default Navigation;
