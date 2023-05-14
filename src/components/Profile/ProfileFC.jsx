import { connect } from "react-redux";
import Profile from "./Profile";
import { useEffect } from "react";
import axios from "axios";

const ProfileAPIContainer = (userId) => {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/${userId}`).then();
  }, []);
  return <Profile />;
};
const mapStateToProps = (state) => {
  return {};
};

const ProfileContainer = connect(mapStateToProps)(ProfileAPIContainer);

export default ProfileContainer;
