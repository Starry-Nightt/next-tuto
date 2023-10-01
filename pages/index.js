import Link from "next/link";

function Home() {
  return (
    <section>
      <b>Home page</b>
      <ul>
        <li>
          <Link className="link link-accent" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/profile">
            Profile
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/users">
            Users
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link className="link link-accent" href="/news">
            News
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Home;
