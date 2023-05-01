import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { Button } from "@mui/material";
const MyPosts = ({ PostsData, addPost }) => {
  const newPostElement = React.createRef();

  const postItem = PostsData.map((item) => {
    return (
      <Post id={item.id} likeCounts={item.likeCounts} message={item.message} />
    );
  });
  const addPosts = () => {
    let text = newPostElement.current.value;

    addPost(text);
    // console.log(text);
  };

  return (
    <div className={styles.content}>
      <h3>Post</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
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
