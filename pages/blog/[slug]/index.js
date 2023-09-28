import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function BlogDetail() {
  const router = useRouter();
  const slug = router.query?.slug;
  return (
    <>
      <div>Blog {slug}</div>
      <Link
        className="link link-primary"
        href={`/blog/${slug}/comments`}
        replace
      >
        View all comment
      </Link>
    </>
  );
}

export default BlogDetail;
