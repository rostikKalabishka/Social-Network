import styles from "./Header.module.css";

import logo from "./../../assets/img/logo.webp";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login }) => {
  return (
    <div className={styles.header}>
      <img src={logo} />
      <div className={styles.loginBlock}>
        {isAuth ? login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
};

export default Header;
