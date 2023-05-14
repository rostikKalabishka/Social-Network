import { connect } from "react-redux";
import Profile from "./Profile";
import React, { useEffect } from "react";
import axios from "axios";
import { setProfileActionCreator } from "../../redux/profilePageReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import withRouter from "./withRouter";
// // this.profileId = this.props.router.params.profileId;
// class ProfileAPIContainer extends React.Component {
//   componentDidMount() {
//     this.profileId = this.props.router.params.id;
//     console.log(this.profileId);
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/profile/${this.profileId}`
//       )
//       .then((response) => {
//         this.props.setProfile(response.data);
//       });
//   }

//   render() {
//     return <Profile {...this.props} profile={this.props.profile} />;
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     profile: state.profilePage.profile,
//   };
// };

// const ProfileContainer = connect(mapStateToProps, {
//   setProfile: setProfileActionCreator,
// })(withRouter(ProfileAPIContainer));

// export default ProfileContainer;

const ProfileAPIContainer = ({ profile, setProfile }) => {
  const router = {
    location: useLocation(),
    navigation: useNavigate(),
    params: useParams(),
  };
  useEffect(() => {
    const profileId = router.params.userId || 2;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`)
      .then((response) => {
        setProfile(response.data);
      });
  });

  return <Profile {...profile} profile={profile} route={router} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const ProfileContainer = connect(mapStateToProps, {
  setProfile: setProfileActionCreator,
})(ProfileAPIContainer);

export default ProfileContainer;
