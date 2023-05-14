import styles from "./Profile.module.css";
import InfoUser from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = ({ profile }) => {
  console.log(profile);
  return (
    <div className={styles.content}>
      <InfoUser profile={profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
