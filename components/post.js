import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Post({ title, body, id }) {
  const router = useRouter();

  const onViewDetail = (e) => {
    e.preventDefault();
    router.push(`posts/${id}`);
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onViewDetail}>
            View more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
