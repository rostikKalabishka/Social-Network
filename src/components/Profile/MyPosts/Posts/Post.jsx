import styles from "./Post.module.css";
import avatar from "../../../../assets/img/avatar.webp";
import { useState } from "react";
const Post = ({ message, likeCounts }) => {
  const [countLike, setCountLike] = useState(likeCounts);

  return (
    <div className={styles.content}>
      <div className={styles.item}>
        <img src={avatar} />
        {message}
        <div>
          <span onClick={() => setCountLike((prev) => prev + 1)}>Like</span>
          {` ${countLike}`}
        </div>
      </div>
    </div>
  );
};

export default Post;
