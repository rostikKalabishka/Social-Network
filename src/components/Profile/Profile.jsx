import backgroundProfile from "./../../assets/img/background.jpg";
import avatar from "./../../assets/img/avatar.webp";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className={styles.content}>
      <div className="background-img">
        <img src={backgroundProfile} />
      </div>
      <div className="avatar">
        <img src={avatar} /> +direction
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
