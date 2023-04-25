import styles from "./MyPosts.module.css";
import Post from "./Posts/Post";
const MyPosts = ({ PostsData }) => {
  const postItem = PostsData.map((item) => {
    return (
      <Post id={item.id} likeCounts={item.likeCounts} message={item.message} />
    );
  });

  return (
    <div className={styles.content}>
      <h3> Post</h3>
      <div>
        <textarea value=" "></textarea>
      </div>
      <div>
        <button>add post</button>
      </div>
      <div className={styles.posts}>{postItem}</div>
    </div>
  );
};

export default MyPosts;
