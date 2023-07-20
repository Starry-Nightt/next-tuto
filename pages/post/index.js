import Post from "../../components/post/post";

function PostList({ posts }) {
  return (
    <>
      <h2>Post List</h2>
      {posts && posts.map((post) => <Post key={post.id} {...post} />)}
    </>
  );
}

export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
