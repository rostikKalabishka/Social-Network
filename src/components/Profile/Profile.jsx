import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import InfoUser from "./ProfileInfo/ProfileInfo";
const Profile = ({ PostsData }) => {
  return (
    <div className={styles.content}>
      <InfoUser />
      <MyPosts PostsData={PostsData} />
    </div>
  );
};

export default Profile;
