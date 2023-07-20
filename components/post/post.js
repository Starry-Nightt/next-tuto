import Link from "next/link";
import styles from "./post.module.scss";

function Post({ id, title, body }) {
  return (
    <Link href={`post/${id}`}>
      <article className={styles.post}>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </Link>
  );
}

export default Post;
