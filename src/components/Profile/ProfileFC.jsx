import { connect } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import axios from "axios";
import { ProfileAPI } from "../../redux/profilePageReducer";

const ProfileAPIContainer = (userId) => {
  useEffect(() => {
    ProfileAPI(userId);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/${userId}`).then();
  }, []);
  return <Profile />;
};
const mapStateToProps = (state) => {
  return {};
};

const ProfileContainer = connect(mapStateToProps)(ProfileAPIContainer, {
  ProfileAPI: ProfileAPI,
});

export default ProfileContainer;
