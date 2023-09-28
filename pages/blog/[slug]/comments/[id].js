import { useRouter } from "next/router";
import React from "react";

function BlogCommentDetail() {
  const router = useRouter();
  const { id, slug } = router.query;
  return (
    <div>
      Blog Comment {id} about {slug}
    </div>
  );
}

export default BlogCommentDetail;
