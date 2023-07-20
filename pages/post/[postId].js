import { useRouter } from "next/router";

function PostDetail({ post }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading ...</h1>;

  return (
    <>
      {post && (
        <article>
          <h2>
            {post.id}. {post.title}
          </h2>
          <p>{post.body}</p>
          <mark>{post.userId}</mark>
        </article>
      )}
    </>
  );
}

export default PostDetail;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.slice(0, 5).map((post) => ({
    params: { postId: `${post.id}` },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const postId = context.params?.postId;
  console.log("Generated post " + postId);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  if (!data?.id)
    return {
      notFound: true,
    };

  return {
    props: {
      post: data,
    },
  };
}
