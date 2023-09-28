import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function BlogComment() {
  const router = useRouter();
  const slug = router.query?.slug;
  return (
    <div className="menu bg-base-200 rounded-box">
      <Link href={`/blog/${slug}/comments/1`} replace>
        Comment 1
      </Link>
      <Link href={`/blog/${slug}/comments/2`}>Comment 2</Link>
      <Link href={`/blog/${slug}/comments/3`}>Comment 3</Link>
    </div>
  );
}

export default BlogComment;
