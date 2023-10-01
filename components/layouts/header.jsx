import { useRouter } from "next/router";
import React from "react";
import { signIn, signOut} from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

function Header() {
  const router = useRouter();
  const tmp = useSession()
  console.log(tmp)
  return (
    <div class="navbar bg-primary text-white">
      <div class="flex-1">
        <a
          class="btn btn-ghost normal-case text-xl"
          onClick={() => router.push("/")}
        >
          NEXT JS
        </a>
      </div>
      <div class="flex-none">
        <button className="btn btn-ghost" onClick={() => router.push("/")}>
          Home
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
        <Link
          href={"/api/auth/signin"}
          className="btn btn-ghost"
          onClick={(e) => {
            e.preventDefault();
            signIn('github');
          }}
        >
          Sign in
        </Link>
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
      </div>
    </div>
  );
}

export default Header;
