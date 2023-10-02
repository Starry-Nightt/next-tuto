import { useRouter } from "next/router";
import React from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AUTHENTICATED = "authenticated";
const UN_AUTHENTICATED = "unauthenticated";

function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();
  return (
    <div className="navbar bg-primary text-white">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={() => router.push("/")}
        >
          NEXT JS
        </a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost" onClick={() => router.push("/")}>
          Home
        </button>
        <button className="btn btn-ghost" onClick={() => router.push("/about")}>
          About
        </button>
        <button
          className="btn btn-ghost"
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </button>
        <button className="btn btn-ghost" onClick={() => router.push("/blog")}>
          Blog
        </button>
        {!session && (status !== 'loading') && (
          <Link
            href={"/api/auth/signin"}
            className="btn btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              signIn("github");
            }}
          >
            Sign in
          </Link>
        )}
        {session && (
          <Link
            href={"/api/auth/signout"}
            className="btn btn-ghost"
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign out
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
