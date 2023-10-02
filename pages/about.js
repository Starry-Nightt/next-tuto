import React from "react";
import Footer from "components/layouts/footer";
import Header from "components/layouts/header";
import Head from "next/head";
import { useState, useEffect } from "react";
import { getSession, signIn } from "next-auth/react";

function About() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <div>About Page</div>
    </>
  );
}

export default About;

About.getLayout = function PageLayout(page) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  return <>{!loading && <div className="p-5">123 {page}</div>}</>;
};
