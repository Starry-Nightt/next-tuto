import React from "react";
import Post from "../../components/post";

function PostList({ data }) {
  return (
    <section>
      <b className="mb-6 block">List of Post</b>
      <div className="flex flex-col gap-5">
        {data &&
          data.map((post, idx) => {
            return <Post key={idx} {...post} />;
          })}
      </div>
    </section>
  );
}

export default PostList;

export const getStaticProps = async (ctx) => {
  const response = await fetch("http://localhost:4000/posts");
  console.log("generating list");
  const data = await response.json();

  return {
    props: {
      data: data,
    },
    revalidate: 10,
  };
};
