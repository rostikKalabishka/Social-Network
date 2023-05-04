import React, { useState } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { Button } from "@mui/material";
import {
  AddPostActionCreator,
  onPostChangeActionCreator,
} from "../../../redux/state";

// const AddPostActionCreator = () => {
//   return { type: "ADD-POST" };
// };
// const onPostChangeActionCreator = (textChange) => {
//   return { type: "UPDATE-NEW-POST-TEXT", text: textChange };
// };
const MyPosts = ({ PostsData, newPostText, dispatch }) => {
  const [newPost, setNewPost] = useState(newPostText);

  const postItem = PostsData.map((item) => {
    return (
      <Post id={item.id} likeCounts={item.likeCounts} message={item.message} />
    );
  });
  const addPosts = () => {
    const active = AddPostActionCreator();
    dispatch(active);
    // changeNewPostText(" ");
    // console.log(text);
  };
  const onPostChange = (e) => {
    let text = e.target.value;
    setNewPost(e.target.value);
    const active = onPostChangeActionCreator(text);
    dispatch(active);
    console.log(newPost);
  };

  return (
    <div className={styles.content}>
      <h3>Post</h3>
      <div>
        <textarea onChange={(e) => onPostChange(e)} value={newPostText} />
      </div>
      <div>
        <Button variant="contained" disableElevation onClick={addPosts}>
          Add post
        </Button>
      </div>
      <div className={styles.posts}>{postItem}</div>
    </div>
  );
};

export default MyPosts;
