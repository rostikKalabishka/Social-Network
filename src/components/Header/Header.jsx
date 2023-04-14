import styles from "./Header.module.css";

import logo from "./../../assets/img/logo.webp";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} />
    </div>
  );
};

export default Header;
