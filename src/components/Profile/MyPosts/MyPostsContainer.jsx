import {
  AddPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      const active = onPostChangeActionCreator(text);
      dispatch(active);
    },
    addPost: () => {
      const active = AddPostActionCreator();
      dispatch(active);
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
