import {
  followActionCreator,
  setUsersActionCreator,
  unFollowActionCreator,
} from "../../redux/findUsersPageReducer";
import { connect } from "react-redux";
import FindUsers from "./FindUsers";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.findUserPage.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    following: (userId) => {
      const active = followActionCreator(userId);
      dispatch(active);
    },
    unFollowing: (userId) => {
      const active = unFollowActionCreator(userId);
      dispatch(active);
    },
    setUsers: (user) => {
      const active = setUsersActionCreator(user);
      dispatch(active);
    },
  };
};
// console.log(mapStateToProps());

const FindUsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FindUsers);
export default FindUsersContainer;
