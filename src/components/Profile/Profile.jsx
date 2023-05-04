import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import InfoUser from "./ProfileInfo/ProfileInfo";
const Profile = ({ PostsData, newPostText, dispatch }) => {
  return (
    <div className={styles.content}>
      <InfoUser />
      <MyPosts
        PostsData={PostsData}
        dispatch={dispatch}
        newPostText={newPostText}
      />
    </div>
  );
};

export default Profile;
