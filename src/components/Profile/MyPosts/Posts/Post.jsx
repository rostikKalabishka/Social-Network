import styles from "./Post.module.css";
import avatar from "../../../../assets/img/avatar.webp";
const Post = ({ message, likeCounts }) => {
  return (
    <div className={styles.content}>
      <div className={styles.item}>
        <img src={avatar} />
        {message}
        <div>
          <span>Like</span>
        </div>
        {likeCounts}
      </div>
    </div>
  );
};

export default Post;
