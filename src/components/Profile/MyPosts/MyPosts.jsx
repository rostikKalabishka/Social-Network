import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = () => {
  return (
    <div className={styles.content}>
      <textarea value=" "></textarea>
      <button>add post</button>
      <div className={styles.posts}>
        <Post likeCounts="2" message="dasdasda dsadasdad" />
      </div>
    </div>
  );
};

export default MyPosts;
