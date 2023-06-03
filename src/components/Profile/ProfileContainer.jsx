import { connect } from "react-redux";
import Profile from "./Profile";
import React, { useEffect } from "react";
import axios from "axios";
import {
  getProfileUserThunkCreator,
  setProfileActionCreator,
} from "../../redux/profilePageReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProfileUser } from "../../api/api";

const ProfileAPIContainer = ({
  profile,
  setProfile,
  getProfileUserThunkCreator,
  isAuth,
}) => {
  const router = {
    location: useLocation(),
    navigation: useNavigate(),
    params: useParams(),
  };
  useEffect(() => {
    const profileId = router.params.userId || 2;

    // axios.get(
    //   `https://social-network.samuraijs.com/api/1.0/profile/${profileId}`
    // );
    // getProfileUser(profileId).then((response) => {
    //   setProfile(response.data);
    // });
    getProfileUserThunkCreator(profileId);
  }, []);

  return (
    <Profile {...profile} profile={profile} route={router} isAuth={isAuth} />
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.authorize.isAuth,
  };
};

const ProfileContainer = connect(mapStateToProps, {
  setProfile: setProfileActionCreator,
  getProfileUserThunkCreator: getProfileUserThunkCreator,
})(ProfileAPIContainer);

export default ProfileContainer;
