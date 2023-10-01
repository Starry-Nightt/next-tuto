import React from "react";
import Footer from "@layouts/footer";
import Header from "@layouts/header";
import Head from "next/head";

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
  return (
    <>
      <main className="bg-primary-content min-h-screen  text-2xl">
        <Header />
        <div className="p-5">{page}</div>
        <Footer />
      </main>
    </>
  );
};
