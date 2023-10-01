import { comments } from "../../data/comment";

export default function CommentDetail({ comment }) {
  return <div>{comment.content}</div>;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}
export async function getStaticProps(ctx) {
  const { params } = ctx;
  const { id } = params;
  const comment = comments.find((cmt) => cmt.id == id);
  return {
    props: {
      comment,
    },
  };
}
