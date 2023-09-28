import Link from "next/link";
import React from "react";

function Blog() {
  return (
    <div>
      <Link className="link link-accent" href="/home">
        Home
      </Link>
      <h1>Blog page</h1>
      <ul>
        <li>
          <Link className="link link-accent" href="/blog/bai-viet-1">
            Blog bai-viet-1
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/blog/bai-viet-2">
            Blog bai-viet-2
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/blog/bai-viet-3" replace>
            Blog bai-viet-3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Blog;
