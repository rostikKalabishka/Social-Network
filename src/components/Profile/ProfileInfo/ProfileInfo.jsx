// import backgroundProfile from "./../../../assets/img/background.jpg";
import avatar from "./../../../assets/img/avatar.webp";
import styles from "./ProfileInfo.module.css";
const InfoUser = () => {
  return (
    <div>
      <div className={styles.backgroundImg}>
        {/* <img src={backgroundProfile} /> */}
      </div>
      <div className={styles.directionBlock}>
        <img src={avatar} /> +direction
      </div>
    </div>
  );
};
export default InfoUser;
