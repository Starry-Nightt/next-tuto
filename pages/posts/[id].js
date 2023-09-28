import { useRouter } from "next/router";
import React from "react";

function PostDetail({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <b>Loading...</b>;
  }
  return (
    <div>
      <b>{data.title}</b>
      <p>{data.body}</p>
    </div>
  );
}

export default PostDetail;

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ],
    fallback: "blocking",
  };
  // const paths = data.map((item) => {
  //   return { params: { id: `${item.id}` } };
  // });
  // return {
  //   paths: paths,
  //   fallback: false,
  // };
}

export async function getStaticProps(ctx) {
  const { params } = ctx;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const data = await response.json();
  if (!data?.id)
    return {
      notFound: true,
    };

  return {
    props: {
      data: data,
    },
  };
}
