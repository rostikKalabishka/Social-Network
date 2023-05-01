import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import InfoUser from "./ProfileInfo/ProfileInfo";
const Profile = ({ PostsData, addPost }) => {
  return (
    <div className={styles.content}>
      <InfoUser />
      <MyPosts PostsData={PostsData} addPost={addPost} />
    </div>
  );
};

export default Profile;
