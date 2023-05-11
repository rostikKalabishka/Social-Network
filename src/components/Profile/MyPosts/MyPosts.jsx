import React, { useState } from "react";
import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";
import { Button } from "@mui/material";

const MyPosts = ({ addPost, updateNewPostText, profilePage }) => {
  const [newPost, setNewPost] = useState(profilePage.newPostText);

  const postItem = profilePage.PostsData.map((item) => {
    return (
      <Post
        id={item.id}
        key={item.id}
        likeCounts={item.likeCounts}
        message={item.message}
      />
    );
  });
  const onAddPost = () => {
    addPost();
  };
  const onPostChange = (e) => {
    let text = e.target.value;
    setNewPost(text);
    updateNewPostText(text);
  };

  return (
    <div className={styles.content}>
      <h3>Post</h3>
      <div>
        <textarea
          onChange={(e) => onPostChange(e)}
          value={profilePage.newPostText}
        />
      </div>
      <div>
        <Button variant="contained" disableElevation onClick={onAddPost}>
          Add post
        </Button>
      </div>
      <div className={styles.posts}>{postItem}</div>
    </div>
  );
};
//34,35 передивисись
export default MyPosts;
