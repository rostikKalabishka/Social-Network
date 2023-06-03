import styles from "./Profile.module.css";
import InfoUser from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Navigate } from "react-router-dom";
const Profile = ({ profile, isAuth }) => {
  console.log(profile);
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <div className={styles.content}>
      <InfoUser profile={profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
