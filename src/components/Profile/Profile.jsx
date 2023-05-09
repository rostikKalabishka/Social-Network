import styles from "./Profile.module.css";
import InfoUser from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = ({ store }) => {
  return (
    <div className={styles.content}>
      <InfoUser />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
